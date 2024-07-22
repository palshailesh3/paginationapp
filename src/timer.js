import { useCallback, useRef, useState } from "react"

  

  const Timer = ()=>{
     const [time,settime] = useState(0);
     const utimer = useRef(null);
     

      function addtimer(){
        let timer = null;
        let count = 0;

        return(({target:{innerHTML}})=>{ 
            if(innerHTML=="start"){ 
                 if(!timer){   timer=true;       
                    console.log("start");       
                    utimer.current= setInterval(()=>{
                        settime(prev=>prev+1);
                        count+=1;
                        console.log(count)
                    },1000)
                 }else{ console.log("start again")
                    clearInterval(utimer.current);
                    utimer.current=setInterval(() => {
                        settime(prev=>prev+1);
                        count+=1;
                        console.log(count)
                    }, 1000);
                 }
            }
            else{ console.log(timer);
                console.log("stop")
                console.log(utimer.current);
                clearInterval(utimer.current);
                
            }
           
        });
      }

      const startimer = useCallback(addtimer(),[])
      const stoptimer = useCallback(addtimer(),[]);
    //  function startimer(){
    //     timer.current=setInterval(() => {
    //           settime(prev=>prev+1);
    //     },1000);
    //  }
    //  function stoptimer(){
    //     clearInterval(timer.current);
    //     console.log(timer.current);
    //  }

    return(<>
    <h2>{time}</h2>
       <button onClick={startimer}>start</button>
       <button onClick={stoptimer}>stop</button>
    </>)
  }

  export default Timer;