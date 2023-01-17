import React from "react";
function Login(){
    return(
        <div>
            <div className="flex h-screen w-full items-start mt-4 justify-center">
        <div className="border border-3 w-1/2 h-3/3 pb-16 border-slate-300 rounded-md text-center">
            <h1 className="font-bold text-3xl mt-12">Welcome to DEV Community 👩‍💻👨‍💻</h1>
             <p className="text-md text-neutral-900">DEV Community 👩‍💻👨‍💻 is a community of 991,010 amazing developers</p>
             <div className="flex flex-col gap-1 items-center">
            
             <h1 className="font-bold text-1xl mt-4 self-start ml-16 ">Email</h1>
             <input className="ml-16 self-start border border-blue-700 border-3 w-2/3 p-2 rounded-md outline-0  w-4/5 "  type="text" placeholder="Enter your email"/>
             <h1 className="font-bold text-1xl mt-4 self-start ml-16  ">Password</h1>
             <input className="ml-16 self-start border border-blue-700 border-3 w-2/3 p-2 rounded-md outline-0  w-4/5 "  type="password" placeholder="Enter your password"/>
             <button className="border border-blue-700 text-blue-700 rounded-md py-2 px-12 mt-10 font-bold hover:bg-white bg-blue-700 text-white hover:text-blue-700 w-4/5 ml-2 "> Log in</button>
             <p className="text-blue-700 mt-8">I forgot my password</p>
             </div>
        </div>
    </div>
        </div>

    )
}
export default Login;