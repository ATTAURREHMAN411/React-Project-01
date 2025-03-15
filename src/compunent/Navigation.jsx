import '../App.css'
import Buttons from './buttons'


const Navigation = () =>{
    return(
        <>
        <div>
            <nav>
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="" />
                </div>
                <ul>
                    <li href="#" >Menu</li>
                    <li href="#" >Location</li>
                    <li href="#" >About</li>
                    <li href="#" >Contect</li>
                </ul>

                <Buttons tittle="Login" bgColor="#d01c28" />
            </nav>
        </div>
        
        </>
    )
}

export default Navigation




