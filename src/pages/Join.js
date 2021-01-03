import * as React from "react";
import LeaderImage from './../business-leader-2080772-1753761 1.png'
import PositionBox from "../components/PositionBox";
import "../styles/Join.css";
// markup
const Positions = [
   {
       title:
           "COHORT",
       description:
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
       linkDesc:
           "APPLICATIONS ACCEPTED BIANNUALLY",
       link:
           "http://google.com"
   },
   {
       title:
           "MENTOR",
       description:
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
       linkDesc:
           "APPLY NOW",
       link:
           "http://google.com"
   },
   {
       title:
           "LEADERSHIP",
       description:
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
       linkDesc:
           "APPLY NOW",
       link:
           "http://google.com"
   }
]
const JoinPage = () => {
   return (
       <main>
           <title>Rice Ventures</title>
           {/* align-items when only one column? */}
           <div className="bg-teal-storm flex flex-col text-center h-screen items-center">
               <h1 className="text-5xl my-10">Join Our Team</h1>
               <img src={LeaderImage} className='w-1/2.7 h-1/4'/>
               <div className='w-screen h-1/2 flex flex-row justify-evenly'>
                   {Positions.map((position) => (
                       <PositionBox {...position} />
                   ))}
               </div>
 
           </div>
          
       </main>
   );
};
 
export default JoinPage;
