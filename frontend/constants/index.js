export const MY_CONTRACT_ADDRESS = "0x34a92a67ae3F6688dF13678D1b16c37E0fAcae64";

// 0x962894e0396c139e0B26716ef11351831d22FBF2
// export const abi = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     inputs: [],
//     name: "NotShelterOwner",
//     type: "error",
//   },
//   {
//     inputs: [],
//     name: "PetIdAlreadyTaken",
//     type: "error",
//   },
//   {
//     inputs: [],
//     name: "SheleterDeleted",
//     type: "error",
//   },
//   {
//     inputs: [],
//     name: "ShelterNotAvaliable",
//     type: "error",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "shelterId",
//         type: "uint256",
//       },
//     ],
//     name: "LogData",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_shelterId",
//         type: "uint256",
//       },
//       {
//         internalType: "string",
//         name: "_name",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_petType",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_size",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_sex",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_age",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "_petId",
//         type: "uint256",
//       },
//     ],
//     name: "addPet",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_shelterName",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_shelterCountry",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_shelterCity",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_shelterZipCode",
//         type: "string",
//       },
//     ],
//     name: "addShelter",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_shelterId",
//         type: "uint256",
//       },
//     ],
//     name: "getShelterListing",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "string",
//             name: "shelterName",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "shelterCountry",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "shelterCity",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "shelterZipCode",
//             type: "string",
//           },
//           {
//             internalType: "bool",
//             name: "atCapacity",
//             type: "bool",
//           },
//           {
//             internalType: "address",
//             name: "shelterOwner",
//             type: "address",
//           },
//           {
//             internalType: "bool",
//             name: "isDeleted",
//             type: "bool",
//           },
//         ],
//         internalType: "struct ShelterDB.Shelter",
//         name: "",
//         type: "tuple",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_shelterId",
//         type: "uint256",
//       },
//     ],
//     name: "getShelterPets",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "string",
//             name: "name",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "petType",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "size",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "sex",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "age",
//             type: "string",
//           },
//           {
//             internalType: "uint256",
//             name: "petId",
//             type: "uint256",
//           },
//         ],
//         internalType: "struct ShelterDB.Pet[]",
//         name: "",
//         type: "tuple[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalPets",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalShelterId",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_shelterId",
//         type: "uint256",
//       },
//       {
//         internalType: "bool",
//         name: "_newCapacity",
//         type: "bool",
//       },
//     ],
//     name: "updateShelterCapacity",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_shelterId",
//         type: "uint256",
//       },
//       {
//         internalType: "bool",
//         name: "_isDeleted",
//         type: "bool",
//       },
//     ],
//     name: "updateShelterStatus",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotShelterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "PetIdAlreadyTaken",
    type: "error",
  },
  {
    inputs: [],
    name: "SheleterDeleted",
    type: "error",
  },
  {
    inputs: [],
    name: "ShelterNotAvaliable",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "shelterId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "shelterName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "shelterCountry",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "shelterCity",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "shelterZipCode",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "atCapacity",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "shelterOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isDeleted",
        type: "bool",
      },
    ],
    name: "ShelterAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ShelterListings",
    outputs: [
      {
        internalType: "string",
        name: "shelterName",
        type: "string",
      },
      {
        internalType: "string",
        name: "shelterCountry",
        type: "string",
      },
      {
        internalType: "string",
        name: "shelterCity",
        type: "string",
      },
      {
        internalType: "string",
        name: "shelterZipCode",
        type: "string",
      },
      {
        internalType: "bool",
        name: "atCapacity",
        type: "bool",
      },
      {
        internalType: "address",
        name: "shelterOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isDeleted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shelterId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_petType",
        type: "string",
      },
      {
        internalType: "string",
        name: "_size",
        type: "string",
      },
      {
        internalType: "string",
        name: "_sex",
        type: "string",
      },
      {
        internalType: "string",
        name: "_age",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_petId",
        type: "uint256",
      },
    ],
    name: "addPet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_shelterName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_shelterCountry",
        type: "string",
      },
      {
        internalType: "string",
        name: "_shelterCity",
        type: "string",
      },
      {
        internalType: "string",
        name: "_shelterZipCode",
        type: "string",
      },
    ],
    name: "addShelter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shelterId",
        type: "uint256",
      },
    ],
    name: "getShelterListing",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "shelterName",
            type: "string",
          },
          {
            internalType: "string",
            name: "shelterCountry",
            type: "string",
          },
          {
            internalType: "string",
            name: "shelterCity",
            type: "string",
          },
          {
            internalType: "string",
            name: "shelterZipCode",
            type: "string",
          },
          {
            internalType: "bool",
            name: "atCapacity",
            type: "bool",
          },
          {
            internalType: "address",
            name: "shelterOwner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isDeleted",
            type: "bool",
          },
        ],
        internalType: "struct ShelterDB.Shelter",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shelterId",
        type: "uint256",
      },
    ],
    name: "getShelterPets",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "petType",
            type: "string",
          },
          {
            internalType: "string",
            name: "size",
            type: "string",
          },
          {
            internalType: "string",
            name: "sex",
            type: "string",
          },
          {
            internalType: "string",
            name: "age",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "petId",
            type: "uint256",
          },
        ],
        internalType: "struct ShelterDB.Pet[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShelterId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shelterId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_newCapacity",
        type: "bool",
      },
    ],
    name: "updateShelterCapacity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shelterId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isDeleted",
        type: "bool",
      },
    ],
    name: "updateShelterStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
