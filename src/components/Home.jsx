import { Link } from "react-router-dom";

export default function Home(){
    return(
   <div className="home-Heading">
    
   <h1 className="title" >Student Management System</h1>
   <h3 className="Subt">Welcome to the student Management App!!</h3>

   
   
    
   <Link to="/students"><button className="btn">Go to Student list</button></Link>
   <Link to="/about"><button className="btn1">About page</button></Link>

   <footer className="home-footer">
        <p className="para">© 2025 Student Management App | Developed by Shahana & Team</p>
      </footer>
    
   </div>
    )
}
