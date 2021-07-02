import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserFromFirestore } from "../services/firebase";
// we need to create the users to get their photos (firebase service)
const usePhotos = () => {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserFromFirestore(userId);
      let followedUserPhotos = [];
      //does the user follows any other user?
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }

      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }
    getTimelinePhotos();
  }, [userId]);

  return { photos };
};

export default usePhotos;
