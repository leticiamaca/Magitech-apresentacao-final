import logo from "../../assets/logoAmarelo.svg"
import { Link } from "react-router-dom"

export default function Menu(){
    return(
        <div className=" flex items-center justify-around h-20 bg-[#180900] border border-[#ff91005b] w-screen position-sticky">
            <img src={logo} alt="" className="w-13" />
<ul className="text-white flex justify-center flex-row">
    <li className="mr-8 font-bold">QUEM SOMOS</li>
    <li className="mr-8 font-bold">MÓDULOS</li>
    <li className="mr-8 font-bold">PLATAFORMA</li>
    <li className="mr-8 font-bold"><Link to="/auth">LOGIN</Link></li>
</ul>
</div>
    )
}