
import { useEffect, useState } from 'react';
import './App.css';
import Calcy from './calcy';
import Switch from './switch';
import Timer from './timer';

function App() {

   const [user,setuser] = useState("");
   const [gusers,setguser] = useState("");
   const [sdata ,setsdata] = useState(undefined);

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
 const handelnum = ({target:{value}})=>{
       setsdata(value);
 }

  return (
    <div className="App">

      <Calcy />
      <input type='number' onInput={handelnum}/>
      <Switch data={sdata}/>
      <Timer />
    </div>
  );

}

export default App;
