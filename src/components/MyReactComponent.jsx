import React, { useEffect, useState } from 'react';

const MyReactComponent = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2").then(r => r.json()).then(res => {
      setData(res.data)
      console.log("React_api: ",res );
  })
  },[])

  const handleClick = () => {
    console.log("Btn Pressed")
    const data = { message: 'Hello from React!' };
    const event = new CustomEvent('react-to-aurelia', { detail: data });
    window.dispatchEvent(event);
    console.log("Event Dispatched")
  };
  

  return <div> 
    <h4>Get Api Call from React</h4>
    <ul>
      {data.map((item,idx)=>(
        <li key={idx}>
            {item.first_name}
          </li>
      ))}
    </ul>
    <br/>
    <h3>{props?.message}</h3>
     <button onClick={handleClick} >{"React->Aurelia"}</button>
     <button onClick={() => props?.testFun("Msg from React")} >{"Proprs btn Test"}</button>
    </div>;
};

export default MyReactComponent;