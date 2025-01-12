import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const updatePharmacyQuantity = async (drugName, pharmacyName, newQuantity) => {
  try {
    // Reference the specific document for the drug
    const drugRef = doc(db, "drugs", drugName);

    // Get the current data of the drug
    const drugSnap = await getDoc(drugRef);
    if (!drugSnap.exists()) {
      console.error("Drug does not exist!");
      return;
    }

    const drugData = drugSnap.data();

    // Update the quantity or remove the object if quantity is 0
    const updatedOfferedBy = drugData.offeredBy
      .map((pharmacy) => {
        if (pharmacy.name === pharmacyName) {
          if (newQuantity > 0) {
            return { ...pharmacy, quantity: newQuantity }; // Update quantity
          } else {
            return null; // Mark for removal
          }
        }
        return pharmacy; // Keep unchanged objects
      })
      .filter((pharmacy) => pharmacy !== null); // Remove null objects

    // Write the updated array back to Firestore
    await updateDoc(drugRef, {
      offeredBy: updatedOfferedBy,
    });

    console.log(
      newQuantity > 0
        ? `Quantity updated successfully for ${pharmacyName}`
        : `${pharmacyName} removed from offeredBy`
    );
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

// Example usage
const drugName = "Paracetamol"; // Replace with the document ID of the drug
const pharmacyName = "Mno Pharmacy"; // Name of the pharmacy to update
const newQuantity = 0; // New quantity to set (will remove if 0)

updatePharmacyQuantity(drugName, pharmacyName, newQuantity);
