import { useState } from 'react'

import './App.css'

function App() {
  const [ispage, setIspage] = useState(false)
  const [thanks, setThanks] = useState(false)
  const pageRendering = () => {
    setIspage(false);
    setThanks(true)

  }
  return (
    

    <>
      {


        thanks && <div   className='offerpage'      >

          <h1>
            Thanks for accepecting the offer
          </h1>
        </div>
      }
      {
        !ispage && <div className="showOffer">
          <button   onClick={()=>(setIspage(!ispage))}   >Show offer</button>
        </div>


      }
      {
        ispage && <div className="offerpage">
          <div className="page">
            <button id='delBtn' onClick={() =>setIspage(!ispage)}    >no</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis delectus nihil voluptas, tempora culpa accusamus, explicabo, asperiores sit officia nesciunt quidem? Illum maiores eos esse error distinctio quo, soluta laboriosam.
          </p>
          <button   onClick={pageRendering}        > Accept offer</button>
        </div>
        </div>
      }
      
       
        
      
    </>
  )
}

export default App
