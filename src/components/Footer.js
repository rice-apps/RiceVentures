import { Link } from 'gatsby';
import React from 'react';


function Footer(){
    var facebook = <button className='underline px-1' onClick={()=> window.open("https://www.facebook.com/RiceVenture/", "_blank")}>
                    Facebook
                </button>
    var linkedin = <button className='underline px-1' onClick={()=> window.open('https://www.linkedin.com/company/rice-ventures', "_blank")}>
                    Linkedin
                </button>
    var notion = <button className='underline px-1' onClick={()=> window.open("https://www.notion.so/", '_blank')}>
                    Notion 
                </button>

    return(
        <footer className ='bg-navy text-white flex items-center justify-around h-10 w-full absolute bottom-0'>
            <h2 className='flex text-s'>
                Rice Ventures © | Email: team@riceventures.org | {facebook} | {linkedin} | {notion}
            </h2>           
            <h2 className='flex'>
                Designed by RiceApps
            </h2>
        </footer>
    )
}
export default Footer;