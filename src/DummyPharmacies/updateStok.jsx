import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

const addPharmacyToDrug = async (drugName, newPharmacy) => {
  try {
    const drugRef = doc(db, "drugs", drugName);

    await updateDoc(drugRef, {
      offeredBy: arrayUnion(newPharmacy),
    });

    console.log(`Pharmacy added successfully to ${drugName}`);
  } catch (error) {
    console.error("Error updating drug:", error);
  }
};

export default addPharmacyToDrug;
