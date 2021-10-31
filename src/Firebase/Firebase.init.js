import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initilizeFirebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initilizeFirebaseAuthentication;
