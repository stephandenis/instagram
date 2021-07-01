import { FieldValue, firebase } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();
  //alows to check if the user exists in the firestore
  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserFromFirestore(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(), // we spread the users information
    docId: item.id, // we also add the docId
  }));

  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();
  return (
    result.docs
      //we map by user spreading the users and grabbing them by ther id
      .map((user) => ({ ...user.data(), docId: user.id }))
      .filter(
        // we want to make sure we don't show our profile neither someone we are following in the suggested list
        (profile) =>
          profile.userId !== userId && !following.includes(profile.userId)
      )
  );
}

//update who i follow (or who the logged in follows)
export async function updateLoggedInUserFollowing(
  loggedInUserDocId, //currently logged in user doc id
  profileDocId, // the user that the loggedin user requests to follow
  isFollowingProfile // true/false (do i follow the person?)
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileDocId) // if im following, remove and don't show on suggested profile anymore
        : FieldValue.arrayUnion(profileDocId), // if i don't follow, follow
    });
}

export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserDocId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId) // if im following, remove and don't show on suggested profile anymore
        : FieldValue.arrayUnion(loggedInUserDocId), // if i don't follow, follow
    });
}
