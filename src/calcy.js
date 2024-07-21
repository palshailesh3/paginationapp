import { useState } from "react";

 let operator =  [1,2,3,4,5,6,7,8,9,0,'.','+','-','*','/','=','c'];
 
const Calcy = ()=>{
   const [state,setstate] =useState("");

     function handlecal({target:{innerText}}){
            
        if(innerText=='='){
            document.getElementById('display').innerText=eval(state);
            setstate(`${eval(state)}`);
        } else if(innerText=='c'){
            setstate(prev=>{
                document.getElementById('display').innerText=prev.slice(0,prev.length-1);
                return prev.slice(0,prev.length-1);
            });
        } 
        else{
            setstate(prev=>{
                document.getElementById('display').innerText=prev+innerText;
                return prev+innerText
            });
        }     
     }
    return(
    <div className="calcy">
       <div className="display" id="display"></div>
       <div className="opertor">
         {
            operator.map((elm,index)=> <div onClick={handlecal} key={index}>{elm}</div>)
         }
       </div>
    </div>
    )
}
export default Calcy;