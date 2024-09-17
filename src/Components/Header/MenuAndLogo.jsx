import Logo from "../../assets/Logo.png";
import Menu from "../../assets/Menu.png";
import { useDispatch } from "react-redux";
import { Checking } from "../../Redux/NavCloseOpen";

function MenuAndLogo() {
  const dispatch=useDispatch();
  function HandleClicked()
  {
    dispatch (Checking())
  }

  return (
    <div className='flex w-[40%] md:w-[20%] h-full gap-4 md:gap-10 items-center'>
      <img src={Menu} alt="Menu" className="h-[30%] md:h-[60%] cursor-pointer" onClick={()=>HandleClicked()}/>
      <img src={Logo} alt="Logo" className="h-[30%] md:h-[80%]" />
    </div>
  );
}

export default MenuAndLogo;
