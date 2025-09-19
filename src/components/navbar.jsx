import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
        
        <nav>

    <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/students">student</Link></li>
    
        <li><Link to="/About">About</Link></li>
    </ul>
   </nav>
        
        
        
        
        
        
        </>
    )
}