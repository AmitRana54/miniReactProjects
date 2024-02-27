import React from 'react'

function Useform({
    handler,
    backForm,
    form,
    idx,
    collectData,


}) {
  return (
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

  )
}

export default Useform