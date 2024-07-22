import { useCallback, useRef, useState } from "react"

  

  const Timer = ()=>{
     const [time,settime] = useState(0);
    // const utimer = useRef(null);
     

      function addtimer(){
        let timer = null;
        let count = 0;

        return(({target:{innerHTML}})=>{ 
            if(innerHTML=="start"){ 
                 if(!timer){          
                    console.log("start");       
                     timer= setInterval(()=>{
                        settime(prev=>prev+1);
                        count+=1;
                        console.log(count)
                        if(count==10){clearInterval(timer);count=0;}
                    },1000)
                 }else{ console.log("start again");count=0;
                    clearInterval(timer);
                    timer=setInterval(() => {
                        settime(prev=>prev+1);
                        count+=1;
                        console.log(count)
                        if(count==10){clearInterval(timer);count=0;}
                    }, 1000);
                 }
            }
            else{   
                clearInterval(timer); 
            }
           
        });
      }

      const startimer = useCallback(addtimer(),[])
      //const stoptimer = useCallback(addtimer(),[]);    ******//what if we do like this************
      //what if we do like this
      //const startimer = addtimer();
      //const stoptimer = addtimer();
      const stoptimer = startimer;
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