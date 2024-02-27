import { useState } from 'react'
import './App.css'
import Useform from './Components.jsx/Useform';

function App() {
  const data = [
    {
      id: "name",
      label: "name",
      type: "text",
      button: "next"
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      button: "next"
    },
    {
      id: "password",
      label: "Password",
      type: "text",
      button: "next"
    },
    {
      id: "dob",
      label: "Date-of-Birth",
      type: "Date",
      button: "submit"
    },
  ];
 
  const [form, setForm] = useState(data);
  const [idx, setIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob:''
  });
  const [issubmited,setIssubmited] = useState(false)
  const handler = (e) => {
    e.preventDefault()
    if (idx == form.length - 1) {
      setIssubmited(true);
      console.log("hello")
    }
    else {
      setIdx((prev) => prev + 1);
    }
  
  }
  const backForm = (e) => {
    e.preventDefault();
    setIdx((prev) => prev - 1);

  };
  const collectData = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log(id, value)
    formData[id] = value;
    const copydata = { ...formData }
    setFormData(copydata);
    
}
  console.log(formData);
  

  return (
    <>
     
          <main>
          <form onSubmit={handler}      >
    { idx>0 && <button onClick={backForm}>
        
        back</button> }
        <label htmlFor="name">{form[idx].label }</label>
        <input 
         value={formData[form[idx].id]}
          onChange={collectData}
          type={form[idx].type} id={form[idx].id}
        />
        <button>{form[idx].button }</button>



      </form>


      </main>
      <h1>
        sucess!
      </h1>
      <hr />
      <span>
        <h5>
          {formData.name}</h5>
         <h5>{formData.email}</h5> {formData.email}
          <h5>    {formData.email}   </h5>
         <h5> {formData.dob}</h5>
          
          


      </span>

    </>
  )
}

export default App