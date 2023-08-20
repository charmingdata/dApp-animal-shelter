import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import Web3Modal from "web3modal";
import { providers, Contract, utils, BigNumber } from "ethers";
import { useEffect, useRef, useState, useCallback } from "react";
import { MY_CONTRACT_ADDRESS, abi } from "../constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [shelterName, setShelterName] = useState("");
  const [shelterCountry, setShelterCountry] = useState("");
  const [shelterCity, setShelterCity] = useState("");
  const [shelterZipCode, setShelterZipCode] = useState("");
  const [shelterCapacity, setShelterCapacity] = useState(false);
  const [shelterId, setShelterId] = useState(0);
  const [shelterId2, setShelterId2] = useState(0);

  const connectWallet = useCallback(async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the zkEVM network, let them know by throwing an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 1442) {
      window.alert("Change the network to zkEVM");
      throw new Error("Change network to zkEVM");
    }

    if (needSigner) {
      return web3Provider.getSigner();
    }
    return web3Provider;
  };

  useEffect(() => {
    const initializeWeb3Modal = () => {
      web3ModalRef.current = new Web3Modal({
        network: "zkEVM",
        providerOptions: {},
        disableInjectedProvider: false,
      });
    };

    if (!walletConnected) {
      initializeWeb3Modal();
      connectWallet();
    }
  }, [walletConnected, connectWallet]);

  const renderButton = () => {
    if (walletConnected) {
      return <span>connected</span>;
    } else {
      return (
        <button
          style={{ cursor: "pointer", backgroundColor: "blue" }}
          onClick={connectWallet}
        >
          Connect your wallet
        </button>
      );
    }
  };

  const newShelter = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer (user's wallet)
      const shelterContract = new Contract(MY_CONTRACT_ADDRESS, abi, signer);
      // call the addShelter function from the solidity contract
      setLoading(true);
      const tx = await shelterContract.addShelter(
        shelterName,
        shelterCountry,
        shelterCity,
        shelterZipCode
      );
      await tx.wait();
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // create browser alert with shelter ID when new shelter is added
  useEffect(() => {
    const listen = async () => {
      const signer = await getProviderOrSigner(true);
      const shelterContract = new Contract(MY_CONTRACT_ADDRESS, abi, signer);
      shelterContract.on("ShelterAdded", (id, event) => {
        let info = {
          id: id.toString(),
          data: event,
        };
        console.log(JSON.stringify(info, null, 4));
        alert(
          `Thank you for adding your shelter. Your shelter ID is: ${id}. Please save this ID for future reference.`
        );
      });
    };
    if (walletConnected) listen();
  }, [walletConnected]);

  const newCapacity = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const shelterContract = new Contract(MY_CONTRACT_ADDRESS, abi, signer);
      setLoading2(true);
      console.log(shelterCapacity);
      const tx = await shelterContract.updateShelterCapacity(
        shelterId,
        shelterCapacity
      );
      await tx.wait();
      setLoading2(false);
      alert("Shelter capacity updated!");
    } catch (err) {
      setLoading2(false);
      console.error(err);
      alert(`Error in processing your request to update capacity.`);
    }
  };

  // get specific shelter info, by shelter ID
  const getMyShelter = async () => {
    try {
      const provider = await getProviderOrSigner();
      const shelterContract = new Contract(MY_CONTRACT_ADDRESS, abi, provider);
      const extractedData = await shelterContract.getShelterListing(shelterId2);
      const shelterInfo = {
        shelterName: extractedData[0],
        shelterCountry: extractedData[1],
        shelterCity: extractedData[2],
        shelterZipCode: extractedData[3],
        atCapacity: extractedData[4],
        address: extractedData[5],
        isDeleted: extractedData[6],
      };
      delete shelterInfo.address;
      console.log(shelterInfo);
      const table = document.createElement("table");
      table.style.borderCollapse = "collapse";

      // Create the table header
      const headerRow = table.insertRow();
      for (const key in shelterInfo) {
        const headerCell = document.createElement("th");
        headerCell.textContent = key;
        headerCell.style.padding = "8px"; // Adding padding for space
        headerCell.style.border = "1px solid black"; // Adding border for cell
        headerRow.appendChild(headerCell);
      }

      // Create the table data row
      const dataRow = table.insertRow();
      for (const key in shelterInfo) {
        const dataCell = document.createElement("td");
        dataCell.textContent = shelterInfo[key];
        dataCell.style.padding = "8px"; // Adding padding for space
        dataCell.style.border = "1px solid black"; // Adding border for cell
        dataRow.appendChild(dataCell);
      }

      const tableContainer = document.getElementById("table-container");

      // Remove any existing table from the container
      while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
      }
      tableContainer.appendChild(table);
    } catch (error) {
      console.log(error.errorName);
      if (error.errorName !== "undefined") {
        alert(`Error: ${error.errorName}`);
      } else {
        alert("An error occurred.");
        console.error(error);
      }
    }
  };

  // get all shelters that are not at capacity
  const getShelterList = async () => {
    const provider = await getProviderOrSigner();
    const shelterContract = new Contract(MY_CONTRACT_ADDRESS, abi, provider);
    const shelters = await shelterContract.queryFilter(
      shelterContract.filters.ShelterAdded()
    );
    console.log(shelters);

    // const table2 = document.createElement("table");
    let table2 = document.getElementById("table2");
    let headerCreated = false;

    if (!table2) {
      // Create the table only if it doesn't exist already

      table2 = document.createElement("table");
      table2.id = "table2";

      // Append the table to the container
      const tableContainer2 = document.getElementById("table2-container");
      tableContainer2.appendChild(table2);
    } else {
      // Clear existing table body content
      const tbody = table2.querySelector("tbody");
      if (tbody) {
        tbody.innerHTML = "";
      }
    }

    for (const shelter of shelters) {
      // extract shelterID (convert to number) from each shelterAdded event
      const theShelterId = shelter.args.shelterId.toNumber();
      // trigger the shelterListings mapping function to extract the complete shelter struct by shelterID
      const shelterData = await shelterContract.ShelterListings(theShelterId);

      // add the complete shelter struct to table if atCapacity===false
      if (!shelterData.atCapacity) {
        const shelterInfo2 = {
          shelterName: shelterData[0],
          shelterCountry: shelterData[1],
          shelterCity: shelterData[2],
          shelterZipCode: shelterData[3],
          atCapacity: shelterData[4],
          address: shelterData[5],
          isDeleted: shelterData[6],
        };
        delete shelterInfo2.address;

        console.log(shelterInfo2);

        // If header is not already created, then create it
        if (!headerCreated) {
          // Create the table header
          const headerRow2 = table2.insertRow();
          for (const key in shelterInfo2) {
            const headerCell2 = document.createElement("th");
            headerCell2.textContent = key;
            headerCell2.style.padding = "8px"; // Adding padding for space
            headerCell2.style.border = "1px solid black"; // Adding border for cell
            headerRow2.appendChild(headerCell2);
          }
          headerCreated = true; // Indicate that the header is now created
        }

        // Create the table data row
        const dataRow2 = table2.insertRow();
        for (const key in shelterInfo2) {
          const dataCell2 = document.createElement("td");
          dataCell2.textContent = shelterInfo2[key];
          dataCell2.style.padding = "8px"; // Adding padding for space
          dataCell2.style.border = "1px solid black"; // Adding border for cell
          dataRow2.appendChild(dataCell2);
        }
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Animal Shelter dApp</title>
        <meta name="description" content="Animal-Shelter-Dapp" />
        <link rel="icon" href="/logo-charmingdata-small.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div>
            <a
              href="https://www.youtube.com/@CharmingData/videos"
              target="_blank"
            >
              By{" "}
              <Image
                src="/logocharmingdata.png"
                alt="charmingdata Logo"
                width={25}
                height={25}
                priority
              />{" "}
              Charming Data
            </a>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            {renderButton()}
          </div>
          <h1 className={styles.title}>Welcome to the Animal Shelter dApp!</h1>
          <div className={styles.description}>
            A contract that keeps track of animal shelters' capacity.
          </div>
          <br></br>
          <div>
            <label>Shelter Name: </label>
            <input
              type="text"
              value={shelterName}
              onChange={(e) => setShelterName(e.target.value)}
              style={{ marginRight: ".5rem" }}
            />
            <br></br>
            <label>Shelter Country: </label>
            <input
              type="text"
              value={shelterCountry}
              onChange={(e) => setShelterCountry(e.target.value)}
              style={{ marginRight: ".5rem" }}
            />
            <br></br>
            <label>Shelter City: </label>
            <input
              type="text"
              value={shelterCity}
              onChange={(e) => setShelterCity(e.target.value)}
              style={{ marginRight: ".5rem" }}
            />
            <br></br>
            <label>Shelter Zip Code: </label>
            <input
              type="text"
              value={shelterZipCode}
              onChange={(e) => setShelterZipCode(e.target.value)}
              style={{ marginRight: ".5rem" }}
            />
            <br></br>
            <button
              onClick={newShelter}
              style={{ cursor: "pointer", backgroundColor: "blue" }}
            >
              {loading ? <p>Loading...</p> : <p>Submit</p>}
            </button>
            <br></br>
            <div>
              <hr style={{ margin: "20px 0" }} />
            </div>
            <label>Is your Shelter at Capacity: </label>
            <input
              type="checkbox"
              checked={shelterCapacity}
              onChange={(e) => setShelterCapacity(e.target.checked)}
              style={{ marginRight: ".5rem" }}
            />
            <br></br>
            <label>My Shelter ID: </label>
            <input
              type="number"
              value={shelterId}
              onChange={(e) => setShelterId(e.target.value)}
              style={{ marginRight: ".5rem" }}
            />
            <br></br>
            <button
              onClick={newCapacity}
              style={{ cursor: "pointer", backgroundColor: "blue" }}
            >
              {loading2 ? <p>Loading...</p> : <p>Submit</p>}
            </button>
          </div>
          <div>
            <hr style={{ margin: "20px 0" }} />
          </div>
          <div>
            <label>Get Shelter Info by ID: </label>
            <input
              type="number"
              value={shelterId2}
              onChange={(e) => setShelterId2(e.target.value)}
              style={{ marginRight: ".5rem" }}
            />
            <br></br>
            <button
              onClick={getMyShelter}
              style={{ cursor: "pointer", backgroundColor: "blue" }}
            >
              <p>Search</p>
            </button>
            <br></br>
            <div id="table-container"></div>
            <div>
              <hr style={{ margin: "20px 0" }} />
            </div>
            <label>
              <font size="6">
                Get all shelters that have capacity to receive animals:{" "}
              </font>
            </label>
            <br></br>
            <button
              onClick={getShelterList}
              style={{ cursor: "pointer", backgroundColor: "blue" }}
            >
              Search
            </button>
            <div id="table2-container"></div>
            <br></br>
          </div>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/charmingdata/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p>Connect with us to stay on top of the latest blockchain news.</p>
          </a>

          <a
            href="https://github.com/charmingdata"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              GitHub <span>-&gt;</span>
            </h2>
            <p>
              Follow the repo to get notified of new smart contracts & dApps.
            </p>
          </a>

          <a
            href="https://www.patreon.com/charmingdata"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Patreon <span>-&gt;</span>
            </h2>
            <p>Your support keeps Charming Data running.</p>
          </a>

          <a
            href="https://www.youtube.com/@CharmingData/videos"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Youtube <span>-&gt;</span>
            </h2>
            <p>Join us to receive notifications of future video tutorials.</p>
          </a>
        </div>
        {/*  */}
      </main>
    </div>
  );
}
