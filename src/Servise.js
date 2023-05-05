// import React from "react";
import Filedata from "./Filedata";
function Servise() {
  return (<>
  
  <div  className="servisepage">
  
{ Filedata.map((val)=>{
  console.log(val);
  return(
  <div className="card">
  <img src={val.img} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h3 className="card-title">{val.name}</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="button">Buy Course</button>
  </div>
</div>)

})


}

</div>



  </>)
}

export default Servise;