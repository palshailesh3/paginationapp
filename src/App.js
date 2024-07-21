
import { useEffect, useState } from 'react';
import './App.css';
import Calcy from './calcy';

function App() {

   const [user,setuser] = useState("");
   const [gusers,setguser] = useState("");

  //  useEffect(()=>{
  //      async function gituser(){
  //       const gituser=await fetch(`https://api.github.com/users`);
  //       const auser =await gituser.json();
  //       setguser(auser);
  //       console.log(auser);

  //      }
  //      gituser();
  //  },[user])

 //here important thing is that how avoiding event.target.value only object destructuring****************
 //**************************************************************************************/
//  const handleinp = ({target:{value}})=>{
//        setuser(value);
//        console.log(value);
//      }


  return (
    <div className="App">

      <Calcy />
    </div>
  );

}

export default App;
