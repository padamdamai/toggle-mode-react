import React  from "react";
import Navbar from "./Components/Navbar.js";
import Main from "./Components/Main.js";

export default function Apps(){

const [darkmode ,setDarkMode] = React.useState(false)

function changeMode(){
setDarkMode(previousValue => !previousValue)
  // console.log("chanagd")
}

  return <div>
<Navbar darkmode={darkmode} toggleDarkMode={changeMode} />
<Main darkmode={darkmode} />
 </div>
}

 