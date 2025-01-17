import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const fetchuser = async (type) => {
  try {
    const drugsRef = collection(db, type);
    const snapshot = await getDocs(drugsRef);
    const Owner = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    return Owner;

  } catch (error) {
    console.error("Error fetching drugs by pharmacy:", error);
  }
};

export default fetchuser;
