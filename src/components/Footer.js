import React from "react";


function Footer(){
    return(
     <div >
        <div className="text-center flex flex-col gap-2 text-sm p-20  bg-stone-200 mt-8">
            <p className="text-md text-neutral-700 "><a className=" text-blue-700 font-bold" href=" ">DEV Community 👩‍💻👨‍💻</a>— A constructive and inclusive social network for software developers. With you every step of your journey.</p>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-blue-700 w-2/3 "> Home Listings Podcasts Videos Tags FAQ Forem Shop Sponsors About Contact Guides Software comparisons Code of Conduct Privacy Policy Terms of use</p>
            <h1 className="w-2/3">Built on <a href=" " className="text-blue-700">Forem </a>— the <a href=" " className="text-blue-700">open source</a> software that powers DEV and other inclusive communities.Made with love and <a href=" " className="text-blue-700">Ruby on Rails.</a> <a  href=" " className="text-blue-700">DEV</a> Community 👩‍💻👨‍💻 © 2016 - 2023.</h1>
           </div>
        </div>

    </div>
    )
}

export default Footer;