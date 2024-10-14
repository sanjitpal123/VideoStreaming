import Logo from "../../assets/Logo.png";
import Menu from "../../assets/Menu.png";
import { useDispatch } from "react-redux";
import { Checking } from "../../Redux/NavCloseOpen";

function MenuAndLogo() {
 

  return (
    <h1 className="text-white ml-6 font-extrabold text-1xl lg:text-xl md:text-3xl tracking-wide md:tracking-wider hover:text-gray-300 transition duration-300 ease-in-out">
    VStreaming
  </h1>
  
  );
}

export default MenuAndLogo;
