import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const arrr = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+", "/",
    "*",".","=","c","del"
  ]
  const handleInput = (e) => {
   

    setValue(e.target.value)
  }
  
  const handleClick = (e) => {
    console.log(e.target.id)
    const id = e.target.id;
    if (e.target.id === "c") {
      setValue('')
    }
    else if (id === "=") {
      handlesubmit();
    }
    else if (id ==="del") {
      setValue((val)=>val.slice(0,val.length-1))
        
      }
   
    else {
      setValue((val) => (val + id))
    }

  }
  
  const handlesubmit = (e) => {
    e?.preventDefault();
    try {
      Number(value);
      const ans = eval(value);
      setValue(ans);

    }
    catch (err) {
      alert("enter a valid input")
    }
  }
  


  return (
    <>
      
      <header>
        <h1>
          calculator
        </h1>
      </header>
      <main>
        <form
        onSubmit={handlesubmit}
        
        >
          
          <input type="text"
          value={value}
            onChange={handleInput}
          
          />
      </form>
        <div className="btnContainer"
        onClick={handleClick}
        
        
        >
          {arrr.map((items,i) => {
            return <button
              id={items}
              key={i}
              className='cell'
            
            >
              {items}
            </button>

          } )}

        </div>
     
         


       


     </main>
    </>
  )
}

export default App
