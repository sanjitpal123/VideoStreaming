import PlusIcon from "../../assets/PlusIcon.png";
import Library from "../../assets/LibraryIcon.png";
import Notification from "../../assets/NotificationIcon.png";
import Profile from "../../assets/ProfilePhoto.png";

function Navright() {
  return (
    <div className="w-[10%] md:w-[10%] h-full flex gap-2 items-center justify-end">
      <img src={PlusIcon} className="h-[60%] hidden md:block" alt="Plus" />
      <img src={Library} className="h-[60%] hidden md:block " alt="Library" />
      <img src={Notification} className="h-[60%] hidden md:block" alt="Notification" />
      <img src={Profile} className="h-[60%] rounded-full " alt="Profile" />
    </div>
  );
}

export default Navright;
