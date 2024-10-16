import PlusIcon from "../../assets/PlusIcon.png";
import Library from "../../assets/LibraryIcon.png";
import Notification from "../../assets/NotificationIcon.png";
import Profile from "../../assets/ProfilePhoto.png";

function Navright() {
  return (
    <div className=" hidden  md:w-[10%] h-full lg:flex gap-2 items-center justify-end">

      <img src={Profile} className="h-[60%] rounded-full " alt="Profile" />
    </div>
  );
}

export default Navright;
