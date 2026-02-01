import React from "react";
import { BsListTask } from "react-icons/bs";
function Displaycard(props) {
    return(
        <div className="bg-white p-4 rounded-2xl shadow-lg w-70 h-30">
                 {/* <BsListTask className=" font-bold   text-4xl  bg-gray-200 rounded-lg" /> */}
                 {/* <div className=" rounded-2xl bg-gray-200  w-12 h-12 flex align-middle align-center justify-center "> */}
        <div className="text-4xl text-white  bg-[#7DA0CA] w-13 h-10  font-bold flex items-center justify-center  rounded-xl">
          {props.icon}
        </div>
      {/* </div> */}
              <h2 className=" mt-1  font-bold font-mono text-2xl">{props.numbers}</h2>
              <p className="text-[#548383] font-mono " > {props.totalTasks}</p>
</div>
    );
    
}
export default Displaycard;
