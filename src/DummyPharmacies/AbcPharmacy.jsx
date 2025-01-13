import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const drugs = [
  {
    name: "Paracetamol",
    description:
      "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature.",
    category: "Pain Relief",
    type: "Tablet",
    offeredBy: [
      { name: "Abc Pharmacy", price: 5.99 },
      { name: "Xyz Pharmacy", price: 6.99 },
      { name: "Pqr Pharmacy", price: 7.99 },
      { name: "Lmn Pharmacy", price: 8.99 },
      { name: "Mno Pharmacy", price: 9.99 },
    ],
  },
  {
    name: "Ibuprofen",
    description:
      "Ibuprofen is a painkiller used to treat pain, inflammation, and fever. It is suitable for adults and children over the age of 3 months.",
    category: "Pain Relief",
    type: "Tablet",
    offeredBy: [
      { name: "Abc Pharmacy", price: 6.99 },
      { name: "Xyz Pharmacy", price: 7.99 },
      { name: "Pqr Pharmacy", price: 8.99 },
      { name: "Lmn Pharmacy", price: 9.99 },
      { name: "Mno Pharmacy", price: 10.99 },
    ],
  },
  {
    name: "Aspirin",
    description:
      "Aspirin is a common painkiller that can help reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches.",
    category: "Pain Relief",
    type: "Tablet",
    offeredBy: [
      { name: "Abc Pharmacy", price: 7.99 },
      { name: "Xyz Pharmacy", price: 8.99 },
      { name: "Pqr Pharmacy", price: 9.99 },
      { name: "Lmn Pharmacy", price: 10.99 },
      { name: "Mno Pharmacy", price: 11.99 },
    ],
  },
];

const addDrugsToFirestore = async () => {
  const drugsCollection = collection(db, "drugs");
  try {
    for (const drug of drugs) {
      await addDoc(drugsCollection, drug);
    }
    console.log("Drugs added successfully!");
  } catch (error) {
    console.error("Error adding drugs: ", error);
  }
};

export default addDrugsToFirestore;
