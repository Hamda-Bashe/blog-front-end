import React from "react";
import { FcLike,FcPrivacy,FcNews,FcIdea,FcAbout, FcAssistant, FcDocument, FcHeadset, FcDecision, FcViewDetails, FcStart,FcHome, FcFile } from "react-icons/fc";
import {MdFavoriteBorder,MdComment, MdBookmarkBorder} from "react-icons/md";
import Comments from "./Comments";
import {Link} from "react-router-dom";
function Body(){
    return(
        <div className="flex gap-2 mt-4  px-3  min-w-full min-h-screen">
            <div className="basis-1/2">
                <div className="flex items-center rounded-md border-2 flex-col p-5 text-left space-y-4" >
                     <h1 className="font-sans text-2xl font-bold">DEV Community 👩‍💻 👨‍💻 is a community of 989,800 amazing developers</h1>
                    <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                   <Link to="/Signup">   <button className="border border-blue-700 text-blue-700 rounded-md py-2 px-12 hover:bg-blue-600 hover:text-white">Create account</button> </Link>
                  <Link to="/Login">   <button  className="text-center hover:underline ">Log in</button> </Link>
                </div>
                <div className="flex flex-col py-5 px-3 space-y-2 block mt-2 ">
                  <h1><FcHome className="inline mr-2"/><a href=" ">Home</a></h1>  
                  <h1><FcDocument className="inline mr-2"/><a href=" ">Reading List</a></h1>  
                  <h1><FcNews className="inline mr-2"/><a href=" ">Listings</a></h1>  
                  <h1><FcHeadset className="inline mr-2"/><a href=" ">Podcasts</a></h1>  
                  <h1><FcStart className="inline mr-2"/><a href=" ">Videos</a></h1>  
                  <h1><FcFile className="inline mr-2"/><a href=" ">Tags</a></h1>  
                  <h1><FcIdea className="inline mr-2"/><a href=" ">FAQ</a></h1>  
                  <h1><FcPrivacy className="inline mr-2"/><a href=" ">Forem Shop</a></h1>  
                  <h1><FcLike className="inline mr-2"/><a href=" ">Sponsors</a></h1>  
                  <h1><FcAbout className="inline mr-2"/><a href=" ">About</a></h1>  
                  <h1><FcAssistant className="inline mr-2"/><a href=" ">Contact</a></h1>  
                  <h1><FcViewDetails className="inline mr-2"/><a href=" ">Guides</a></h1>  
                  <h1><FcDecision className="inline mr-2"/><a href=" ">Software Comparisons</a></h1>  
                 
                </div>

            </div>
            
            <div className=" ml-2 mt-1  h-84 flex-col  basis-full ">
                 <div className="flex ml-5 mt-2 mb-3 flex-row gap-3 text-neutral-600 text-lg"><a className="text-black font-bold" href=" ">Relevant</a><a href=" ">Latest</a><a href=" ">Top</a></div>
                 <div className="border  border-slate-300 border-3 rounded-md pb-5">

                 <Link to="/Blogs"><img  className="rounded-md text-left " src="https://res.cloudinary.com/practicaldev/image/fetch/s--X6ag2_5u--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9pc5qepq5y1gedj9yza.jpg" alt="pic"/></Link>
                 <div className="flex flex-row mt-5 ml-5">
                    <img className="w-10 h-10 rounded-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Stb6N30a--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/766663/8fcbc1f0-80b0-4a60-9fd1-6f561591249e.jpg" alt="profile"/>
                    <div className="flex flex-col ml-2">
                        <h1 className="font-semibold">Shelley Benhoff</h1>
                        <p className="text-sm text-neutral-500">Jan 16</p>
                    </div>
                 </div>
                 <h1 className="font-sans text-4xl font-bold ml-10 mt-5">Top 4 Soft Skills for Engineers</h1>
                 <div className="flex ml-12 mt-4 flex-row gap-3 text-neutral-600 text-md"><a href=" ">#leadership</a><a href=" ">#career</a><a href=" ">#management</a></div>
                 <div></div>
                 <div className="flex flex-row justify-between ml-12 mt-4">
                    <div className="flex flex-row gap-4 text-neutral-600 items-center">
                        <h1><MdFavoriteBorder size={20} className="inline mr-2 text-black"/>2 reactions</h1>
                        <h1> <MdComment className="inline mr-2 text-black"/>Add Comment</h1>
                    </div>
                    <h1 className="text-neutral-500 text-sm mr-5">3 min read <MdBookmarkBorder size={20} className="inline ml-2 text-black" /></h1>
                 </div>
                 </div>
                 <Comments/>
                 
               

            </div>

            <div className="flex items-center rounded-md border  border-slate-300 border-3 h-auto ml-2 flex-col p-5 text-left space-y-4 h-84 basis-1/2  gap-5">
            <div className="flex  items-center "><h1 className="font-sans font-bold mr-40  text-xl text-left">Listings</h1><a className="text-sky-600 text-sm" href=" ">See all</a></div>
            <p>Redesigning and making Your Website for free</p>
            <p>automate: run github ci/cd through slack slash command</p>
            <p>Open for Devops Engineer Internship</p>
            <p>Open AI - Mastery of Artificial Intelligence</p>
            <p>Architect/Explain your project with NextSketch-2</p>
            </div>



        </div>
    
    )
}

export default Body;