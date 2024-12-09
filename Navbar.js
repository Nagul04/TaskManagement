import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{backgroundColor:"black",color:"black",height:"90px",fontSize:"1.5rem"}}>
        <ul>
          <li style={{display:"inline-block",marginTop:"10px",backgroundColor:"black",textDecoration:"",}}>
            <Link to='/Home'>HOME</Link>
          </li>
      
          <li style={{display:"inline-block",marginTop:"10px",marginLeft:"25px",backgroundColor:"black"}}>
            <Link to='/Contact'>CONTACT</Link>
          </li>
      
          <li style={{display:"inline-block",marginTop:"10px",marginLeft:"30px",backgroundColor:"black"}}>
            <Link to='/About'>ABOUT</Link>
          </li>
        </ul>
      </nav>
      
    );
  };
  
  export default Navbar;