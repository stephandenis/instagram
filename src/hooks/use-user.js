import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserFromFirestore } from "../services/firebase";

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      //get user by id by caling firebase, if we have that:
      const [response] = await getUserFromFirestore(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
};

export default useUser;
