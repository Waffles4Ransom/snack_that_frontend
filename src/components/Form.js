import React, { useState } from 'react'

export default function Form(props) {
  const [inputs, setInputs] = useState(props.inputs.map( i => ''))

  const renderInputs = () => {
    return props.inputs.map((input, index) => (
      <div key={index + 1}>
        {/* <label>{input[0]}</label> */}
        <input
          type={input[1]}
          key={input}
          placeholder={input[0]}
          value={inputs[index]}
          onChange={(e => handleChange(e, index))}
        />
      </div>
    ))
  }

  const handleChange = (e, i) => {
    const newInputs = [...inputs]
    newInputs[i] = e.target.value
    setInputs(newInputs)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.submitCallback(inputs)
    setInputs(props.inputs.map(i => ''))
  }


  return(
      <form onSubmit={handleSubmit}>
        {renderInputs()}
        <button>{props.submitValue}</button>
      </form>
  )
}