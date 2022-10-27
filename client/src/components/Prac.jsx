////------------------ Ques :- Hide and Show the text with Single Button   -----------------------////


// import React from "react";
// import { useState } from "react";

// const Prac = () => {
//   const [show, setShow] = useState(false);

//   const handleText = () => {
//     if(show === true){
//         setShow(false)
//     }
//     else{
//         setShow(true)
//     }
//   };

//   return (
//     <div>
//       {!show ? <h1>HEELLO GG KISMAT KE MAARE LOG</h1> : null} 
//       <button onClick={handleText}>CLICK HERE</button>
//     </div>
//   );
// };

// export default Prac;


////-------------------- IInd Method ------------------////

import React from "react";
import { useState } from "react";

const Prac = () => {
  const [show, setShow] = useState(true);

  const handleText = () => {
    setShow(!show)
  };

  return (
    <div>
      { show && <h1>HEELLO GG KISMAT KE MAARE LOG</h1> } 
      <button onClick={handleText}>CLICK HERE</button>
    </div>
  );
};

export default Prac;

