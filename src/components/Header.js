import React from "react";
import { MdSearch } from "react-icons/md";
import {Link} from "react-router-dom";

function Header(){
    return(
     <div className="flex justify-between px-5 py-2 border-b-2 sticky top-0 h-30 bg-white" >
        <div className="flex items-center ">
            <img className="h-9" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="Logo"/>
            <div className="ml-2 flex justify-between border-2 items-center rounded-md py-1">
                <input type="text" placeholder="Search" className="py-1 px-3 w-80  outline-0"/>
                <MdSearch size={25}/>
                
            </div>
        </div>
    
        <div className="flex items-center">
          <Link to="/Login">  <button className="mr-2 hover:underline ">Log in</button></Link>
            <Link to="/Signup">
            <button className="border border-blue-700 rounded-md py-2 px-3 hover:bg-blue-600 hover:text-white">Create account</button>
            </Link>
        </div>

    </div>
    )
}

export default Header;