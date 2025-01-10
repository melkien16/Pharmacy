import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const registerPharmacy = async (pharmacyData) => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  try {
    const docRef = await addDoc(
      collection(db, "Pending_Pharmacies"),
      pharmacyData
    );
    return docRef.id;
  } catch (e) {
    throw e;
  }
};
