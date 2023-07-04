import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";

const ggProvider = new GoogleAuthProvider();
export const signinWithGoogle = () => {
  signInWithPopup(auth, ggProvider)
    .then((response) => {
      console.log("response", response);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
