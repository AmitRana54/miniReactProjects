import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, sethours] = useState(0)
  const [isstart, setIstart] = useState(false)
  const [timerid, setTimer] = useState(0);
  const [pause, setPause] = useState(false);
  const handleInput = (e) => {

    console.log(e.target.id, e.target.value)
    const id = e.target.id;
    const value = Number(e.target.value);
  
   

    if (id == "sec") {
      if (value > 59) {
        alert("enter a valid input ")
      }
      setSeconds(value)
    }
    else if (id == "min") {
      if (value > 59) {
        alert("enter a valid input ")
      }
      setMinutes(value)
    }
    else if (id == "hr") {
      sethours(value)
    }
    console.log(seconds, minutes, hours)

  }
  const runtimer = (sec, min, hr) => {
    if (sec === 0 && min === 0 && hr === 0) {
      clearInterval(timerid)
      setIstart(false)
     
      
    }
    if (sec > 0) {
      setSeconds((prev) => prev - 1)
    }
    else if (sec == 0 && min > 0) {
      setMinutes((prev) => prev - 1)
      setSeconds(59)
    
    }
    else {
      sethours(prev => (prev - 1))
      setMinutes(59);
      setSeconds(59)
    }
   
  
    


  };
  const handleClick = () => {
    setIstart(true)
  };
  useEffect(() => {
    let timer;
    if (isstart) {
    timer =  setInterval(() => {
        runtimer(seconds, minutes, hours, timer);
      }, 1000);
    }
setTimer(timer)
    return () => {
      clearInterval(timer);
      
    };
  }, [isstart, minutes, seconds, hours]);
  
  const handelPause = () => {
    setPause(true);
    clearInterval(timerid)


  }
  const handleResume = () => {
    setPause(false)
    runtimer(seconds,minutes,hours)

  }
  const handlereset = () => {
    setSeconds(0)
    setMinutes(0)
    sethours(0)
    clearInterval(timerid);
    isstart(false)

}
  return (
    <>
       <main>
        {!isstart && <div>
          < div className="inptDiv">
    <input type="text"
        id="hr"
        onChange={handleInput}
              placeholder='HH'
              
    />
      <input type="number"
        id='min'
        placeholder='MM'
        onChange={handleInput}
    
      />
      <input type="number"
        id='sec'
        placeholder='SS'
        onChange={handleInput} 
        />  </div>
         
          <div className="InputContainer">
          <button   onClick={handleClick}       >
        start
      </button>  
          
          </div>     
        </div> 

           }   
           {isstart && <div className='result'> {hours < 10 ? `0${hours}` : hours}<span>:</span>{minutes < 10 ? `0${minutes}` : minutes}<span>:</span>{seconds <10 ? `0${seconds}` : seconds}
          <div className="InputContainer">
            {
              !pause && <button
            
              onClick={handelPause}
              
              >
              pause
          </button>
            }
            {
              
pause && <button
            
onClick={handleResume}

>
                resume
                
              </button>
              

            }
            <button
            onClick={handlereset}
            
            >
              Reset
            </button>
          </div> 
        </div>}          

</main> 
    </>
  )
}

export default App
