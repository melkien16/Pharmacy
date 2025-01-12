import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const updatePharmacyPrice = async (drugName, pharmacyName, newPrice) => {
  try {
    const drugRef = doc(db, "drugs", drugName);

    const drugSnap = await getDoc(drugRef);
    if (!drugSnap.exists()) {
      console.error("Drug does not exist!");
      return;
    }

    const drugData = drugSnap.data();

    const updatedOfferedBy = drugData.offeredBy.map((pharmacy) => {
      if (pharmacy.name === pharmacyName) {
        return { ...pharmacy, price: newPrice };
      }
      return pharmacy;
    });

    await updateDoc(drugRef, {
      offeredBy: updatedOfferedBy,
    });

    console.log(`Price updated successfully for ${pharmacyName}`);
  } catch (error) {
    console.error("Error updating price:", error);
  }
};

const drugName = "Paracetamol";
const pharmacyName = "Melkie";
const newPrice = 4;

updatePharmacyPrice(drugName, pharmacyName, newPrice);
