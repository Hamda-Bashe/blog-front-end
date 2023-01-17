import React from "react";

function Signup(){
    return(
       <div>
    <div className="flex h-screen w-full items-start mt-4 justify-center">
        <div className="border border-3 w-1/2 h-3/3 pb-6 border-slate-300 rounded-md text-center">
            <h1 className="font-bold text-3xl mt-12">Welcome to DEV Community 👩‍💻👨‍💻</h1>
             <p className="text-md text-neutral-900">DEV Community 👩‍💻👨‍💻 is a community of 991,010 amazing developers</p>
             <div className="flex flex-col gap-1 items-center">
                <h1 className="font-bold text-1xl mt-4 self-start ml-16 ">First Name</h1>
             <input className="ml-16 self-start border border-blue-700 border-3 w-2/3 p-2 rounded-md outline-0" type="text" placeholder="Enter your first name"/>
             <h1 className="font-bold text-1xl mt-4 self-start ml-16 ">Last Name</h1>
             <input className="ml-16 self-start border border-blue-700 border-3 w-2/3 p-2 rounded-md outline-0"  type="text" placeholder="Enter your last name"/>
             <h1 className="font-bold text-1xl mt-4 self-start ml-16 ">Email</h1>
             <input className="ml-16 self-start border border-blue-700 border-3 w-2/3 p-2 rounded-md outline-0 "  type="text" placeholder="Enter your email"/>
             <h1 className="font-bold text-1xl mt-4 self-start ml-16  ">Password</h1>
             <input className="ml-16 self-start border border-blue-700 border-3 w-2/3 p-2 rounded-md outline-0 "  type="password" placeholder="Enter your password"/>
             <button className="border border-blue-700 text-blue-700 rounded-md py-2 px-12 mt-3 font-bold hover:bg-blue-600 hover:text-white"> Sign up</button>
             </div>
        </div>
    </div>
       </div>

    )
}
export default Signup;