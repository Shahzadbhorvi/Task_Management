
import React from "react"
import Displaycard from "../components/StatsCard"
import { BsListTask } from "react-icons/bs";
import { MdOutlineDone, MdOutlineSchedule } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";


export default function Dashboard() {
    return(
        < >
    
        <div  className="flex flex-wrap gap-10"  >
               <Displaycard
               icon = {<BsListTask />}
                numbers="24"
                 totalTasks="TotalTasks"
                 
                 />
                 <Displaycard
                 icon = {<MdOutlineDone/>}
                numbers="12"
                 totalTasks="CompletedTasks"
                 />
                     <Displaycard
                 icon = {<FaSpinner />}
                numbers="12"
                 totalTasks="InProgress"
                 />
                   <Displaycard
                  icon = {< MdOutlineSchedule/>}
                    numbers="2"
                 totalTasks="PendingTasks"
                 />

        </div>
        </>
    )
}