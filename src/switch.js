


const Switch = ({data})=>{
   

    // switch (data) {
    //     default:
    //       console.log("default")
    //       break;
    //     case 6:
    //       document.getElementById('para').innerHTML = "Today is Saturday";
    //       break;
    //     case 1: console.log(999999999999);
    //       document.getElementById('para').innerHTML = "Today is Sunday";
    //   }

   const dataceck = ()=>{ 
      
    switch (data) {
        default:
          console.log("default")
          break;
        case 6:
          document.getElementById('para').innerHTML = "Today is Saturday";
          break;
        case 1: console.log(999999999999);
          document.getElementById('para').innerHTML = "Today is Sunday";
      }
    //  switch(data){
    //     case 99:{console.log("yyyyyyyyyyyy");
    //              break;}
    //     case 88: document.getElementById('para').innerHTML="text";
    //               console.log(data);
    //               break;
    //     default: document.getElementById('para').innerHTML="memoyy default" ;                
    //  }
   }
 //  what if we directly invoke dataceck() instead of invoking as click handler//error that define how 
// component get executed
   
   return(<>
            <p id="para"></p>
            <button onClick={dataceck}>click</button>  
    </>)
}


export default Switch;