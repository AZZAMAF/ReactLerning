import { useNavigate } from "react-router-dom"
import DefaultButton from "../../components/Moduls/DefaultButton"
import OptionLanguage from "../../components/Moduls/OptionLanguage"

function Navbar() {
    const navigate = useNavigate()
   
 return(
    <header className="relative z-20">
        <nav className=" flex flex-wrap justify-between items-center 
         pr-10 pl-7 py-4" >
            <div>
                <img src="/netflix_logo_icon.png" alt="netfilx-logo" 
                width={100} height={45} />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
                <OptionLanguage/>
                <DefaultButton text={"Sign In"} onClick={() => navigate ("/login")}/>
            </div>
        </nav>
    </header>
    )


}

export default Navbar