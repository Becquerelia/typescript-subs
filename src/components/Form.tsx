import { useState } from 'react';

interface FormState {
    nick: string
    subMonths: number
    avatar: string
    description: string
}

function Form() {

    const [inputValues, setInputValues] = useState({
        nick: " ",
        subMonths: 0,
        avatar: " ",
        description: " "                
    })
    const handleSubmit = () => {};

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }
  
    return (
    <div>
      <form onSubmit={handleSubmit} >
          <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
          <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths" />
          <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
          <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
  
          <button>Save new subscriber</button>
  
      </form>
    </div>
    )
  }
  
  export default Form;