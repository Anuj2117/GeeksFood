import FastfoodIcon from '@mui/icons-material/Fastfood';
import {NavLink} from "react-router-dom"
import "../App.css";
function Header(){
    return (
        <>

        <header>
            <nav>
              <div className='Logopart'>
              <FastfoodIcon className='FastfoodIcon' style={{fontSize:"40px", color:"white"}}/>
              <h2>GeeksFoods</h2>
              </div>

              <div className="navlinks">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Quotes">Quotes</NavLink></li>
                    <li><NavLink to="/Restourent">Resturants</NavLink></li>
                    <li><NavLink to="/Foods">Foods</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
              </div>

              <div className="startbutton">
                <button className='startbutton'>Get Started</button>
              </div>
            </nav>
        </header>

        </>
    )
}
export default Header