import React from "react";
import {MdFavoriteBorder,MdComment, MdBookmarkBorder, MdOutlineMoreHoriz} from "react-icons/md";
function Blog(){
    return(
       <div className="flex gap-2 mt-4  px-3  min-w-full min-h-full">
            <div className="basis-1/12">
                
                <div className="flex flex-col py-5 px-3 space-y-2 block mt-2 justify-center gap-3 text-left ml-3">
                 <MdFavoriteBorder size={25}/><h1 className="ml-2">2</h1><MdComment size={25}/><h1 className="ml-2">0</h1><MdBookmarkBorder size={25}/><h1 className="ml-2">2</h1><MdOutlineMoreHoriz size={25}/>
                 
                </div>

            </div>
            
            <div className=" ml-2 mt-1  min-h-screen flex-col  basis-full h-auto mb-6">
            
                 <div className="border  border-slate-300 border-3 rounded-md pb-5 h-auto">

                 <img  className="rounded-md text-left " src="https://res.cloudinary.com/practicaldev/image/fetch/s--X6ag2_5u--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9pc5qepq5y1gedj9yza.jpg" alt="pic"/>
                 <div className="flex flex-row mt-5 ml-5">
                    <img className="w-10 h-10 rounded-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Stb6N30a--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/766663/8fcbc1f0-80b0-4a60-9fd1-6f561591249e.jpg" alt="profile"/>
                    <div className="flex flex-col ml-2">
                        <h1 className="font-semibold">Shelley Benhoff</h1>
                        <p className="text-sm text-neutral-500">Posted on Jan 16 • Originally published at <a href=" " className="text-green-500">hoffstech.com</a></p>
                    </div>
                 </div>
                 <h1 className="font-sans text-5xl font-bold ml-10 mt-5">Top 4 Soft Skills for Engineers</h1>
                 <div className="flex ml-12 mt-4 flex-row gap-3 text-neutral-600 text-md"><a href=" ">#leadership</a><a href=" ">#career</a><a href=" ">#management</a></div>
                 
                 
                 <div className="flex  justify-between ml-12 mt-4 h-84 mr-12">
                   <iframe className="w-full h-full" src="https://www.youtube.com/embed/4Wtkk7xw0-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 </div>
                 <div className="ml-12 mt-4 h-84 mr-12 flex flex-col gap-3 text-2xl text-justify">
                    <p>In the past, the requirements for engineers and developers focused solely on technical skills including development, technical architecture, and DevOps. The tech industry has changed over the years and now more importance is placed on soft skills such as communication and leadership. Engineers must have a combination of both technical skills and soft skills but what soft skills should they focus on? Here are the top 5 soft skills for engineers.</p>
                    <h1 className="font-bold text-4xl">1. Anticipating Needs</h1>
                    <p>People like it when you anticipate their needs. We do not always ask for help because we often don’t know what help to ask for. When you work on a team, you spend a lot of time with your co-workers. You should get to know them as people and notice when they have questions, especially repeat questions. You can create an FAQ document or glossary of terms to answer their question and add additional terms that are related. That way, they will have a central location to find information and this will also reduce the amount of time you spend answering repeat questions!</p>
                    <h1 className="font-bold text-4xl">2. Improving a Process</h1>
                    <p>Even the best companies suffer from outdated processes. It is human nature to avoid change, especially when a process has always worked. However, technology is a rapidly changing industry and processes must change in order to keep up. If you ever see an outdated process such as using obsolete tooling, manually creating reports, or nonexistent documentation, you should speak up and offer alternatives. You should always look for ways to automate processes because that will make everyone’s life easier!</p>
                    <h1 className="font-bold text-4xl">3. Writing Technical Requirements</h1>
                    <p>Technical requirements are incredibly important to help you plan out your approach to development upfront. Writing detailed technical requirements helps productivity as you will not have to remember your approach off the top of your head. This also allows for any developer to switch off tasks so that someone else can pick up the task quickly. Technical requirements should focus on how to build something to the desired result detailed in the business or functional requirements. Writing out technical requirements also helps to mitigate inaccurate estimates as you break each task down into a list of requirements that are more easily estimated.</p>
                    <h1 className="font-bold text-4xl">4. Project Management</h1>
                    <p>As an engineer, you will work on projects and most likely you will work on a project team. Understanding a bit about project management will help you understand where the project manager is coming from and you will be better able to communicate with them and assist in project planning. There are key aspects of project management that you should understand to ensure your own success and the success of the team. You should understand the difference between Waterfall and Agile as these are the top two project management methodologies that you will encounter in the workplace.</p>

<p>Waterfall includes six phases of Project Management: Requirement Gathering, Design, Implementation, Testing (or Quality Assurance), Delivery, and Maintenance. These phases are performed in a strict order with each phase beginning after the end of the previous phase. This project management methodology is not flexible and relies heavily on the accuracy of the discovery phase where the timeline and budget are set.</p>

<p>The Agile project management methodology includes project phases with a short deadline that are worked on concurrently by the team. Agile is iterative and flexible which helps to manage frequently changing priorities by including all stakeholders and taking their feedback into account. Changes in priority can cause a reduction in productivity, especially if the changes come late in the project. Agile encompasses many popular frameworks including Scrum, Kanban, Extreme Programming (XP), and Adaptive Project Framework (APF).</p>

<p>The tech industry has evolved over the years and now places more importance on soft skills such as communication and leadership, in addition to the traditional technical skills for engineers and developers. Engineers should focus on developing soft skills such as anticipating needs, improving processes, writing technical requirements, and understanding project management. By understanding the key aspects of project management and methodologies such as Waterfall and Agile, engineers can better communicate with project managers and assist in project planning, leading to a more successful outcome for the team. With this combination of technical skills and soft skills, engineers will be well-equipped to navigate the ever-changing tech industry.</p>
<div className="pt-10 pb-10 border-t-1  w-full">
    <div className="flex flex-row justify-between p-6  w-full pt-5 pb-5 items-center"><h1 className="font-bold text-2xl">Top Comments (0)</h1><button className="border border-black border-3 rounded-md px-2 py-1  text-sm ">Subscribe</button></div>
    <div className="flex flex-row items-center gap-1 text-sm ">
        <img className="w-8 h-8 rounded-full self-start"  src="https://res.cloudinary.com/practicaldev/image/fetch/s--RmY55OKL--/c_limit,f_auto,fl_progressive,q_auto,w_256/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" alt="prof"/>
        <input className="border border-neutral-400 border-3 w-full p-2 rounded-md outline-0 pb-10 pr-5"  type="text" placeholder="Add to the discussion"/>
    </div>
    <p className="text-sm text-center text-neutral-500 mt-5">Code of Conduct • Report abuse</p>
</div>
                 </div>
                 </div>
                
                 
               

            </div>

            <div className="flex  rounded-md border pb-3  sticky top-20 border-slate-300 border-3 h-52  ml-2 flex-col  basis-1/3 ">
                <div className="w-full h-8 bg-black "></div>
                <div className="flex flex-row gap-1 -mt-2 mr-4 ml-2 items-start">
                     <img className="w-10 h-10 rounded-full " src="https://res.cloudinary.com/practicaldev/image/fetch/s--Stb6N30a--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/766663/8fcbc1f0-80b0-4a60-9fd1-6f561591249e.jpg" alt="profile"/>
                     <h1 className="font-bold text-1xl self-end ">Shelley Benhoff</h1>
                </div>
                 <button className="border border-blue-700 text-blue-700 rounded-md py-2 px-12 mt-5 p-2 font-bold hover:bg-white bg-blue-600 text-white hover:text-blue-700 ml-2 mr-2">Follow</button>
                <div className="flex flex-col gap-1 text-neutral-600 ml-2 mt-8 pb-2 ">
                <p className="font-bold text-xs">JOINED</p>
                <p className="text-sm ">Dec 2, 2021</p>
            </div>
            </div>
          



        </div>
    


    )

}
export default Blog;