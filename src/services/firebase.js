import { firebase } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();
  //alows to check if the user exists in the firestore
  return result.docs.map((user) => user.data().length > 0);
}
