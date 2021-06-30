import useUser from "../../hooks/use-user";
import Suggestions from "./Suggestions";
import User from "./User";

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
};

export default Sidebar;

// We need to pass the userId to the suggestions because we want to make sure that
// we don't show suggestions for users that the current logged user is following.
// So we have suggestions from users we don't follow
