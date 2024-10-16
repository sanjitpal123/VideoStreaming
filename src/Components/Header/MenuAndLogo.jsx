import Logo from "../../assets/Logo.png";
import Menu from "../../assets/Menu.png";
import { useDispatch } from "react-redux";
import { Checking } from "../../Redux/NavCloseOpen";

function MenuAndLogo() {
 

  return (
    <h1 className="text-white   font-extrabold text-1xl lg:text-xl md:text-3xl block tracking-wide ml-10 md:ml-6 md:tracking-wider hover:text-gray-300 transition duration-300 ease-in-out">
    VStream
  </h1>
  
  );
}

export default MenuAndLogo;
