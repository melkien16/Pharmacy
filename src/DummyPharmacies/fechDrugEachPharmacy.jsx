import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const fetchDrugsByPharmacy = async (pharmacyName) => {
  try {
    // Reference the 'drugs' collection
    const drugsRef = collection(db, "drugs");

    // Fetch all documents in the collection
    const snapshot = await getDocs(drugsRef);

    // Filter the documents based on the 'offeredBy' array
    const drugs = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() })) // Map to include document data
      .filter((drug) =>
        drug.offeredBy.some((pharmacy) => pharmacy.name === pharmacyName)
      );

    // Log the results
    console.log(`Drugs offered by ${pharmacyName}:`, drugs);
    return drugs;
  } catch (error) {
    console.error("Error fetching drugs by pharmacy:", error);
  }
};

// Example usage
const pharmacyName = "Abc Pharmacy"; // Name of the pharmacy to filter
fetchDrugsByPharmacy(pharmacyName);
