import { useState } from "react";


function ListGroups(){
  let items = ['San Fransisico', 'NewYork', 'Tokyo','London','Paris'];
  
 let [selectindex, setSelectindex]= useState(0)

  const getmessage = () => items.length === 0 && <p>no item found</p>;
 

  return(
    <>
    <h1>Cities</h1>
    <h2 className="p-3">City slected is <b>{selectindex}</b> and name is <b><u>{items[selectindex]}</u></b></h2>
   
    {getmessage()}
    <ul className="list-group" >
      
        
    {items.map((item, index) => <li className={ selectindex === index ? 'list-group-item active' :'list-group-item'}
    key={item} onClick={()=>setSelectindex(index)}>{item}</li>)}
    

    </ul>


    </>
  )
}
export default ListGroups; 