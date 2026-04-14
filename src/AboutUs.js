import React, { useState } from "react";
function AboutUs(){
const [count,setCount]=useState(0);

    return(
        <div>
            <p count:{count}></p>
           <button likes={()=> setcount(count+1)}></button>
            
        </div>
    );
}