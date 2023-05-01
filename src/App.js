import React, { useEffect, useState } from 'react'

const App = () => {

  var  [temperature, setTemperature] = useState(10) 
  const [name , setName] = useState('')

  useEffect(() => {
    if(temperature > 25){
        setName('hot')
    }
    else if (temperature < 15 ){
      setName('cold')
    }
    else{
      setName('neutral')
    }
  
  },[temperature])
    

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${name}`}>     
          {temperature} C
        </div>
      </div>
      <div className='button-container'>
        <button onClick={() => setTemperature(temperature+=1)}>+</button>
        <button onClick={() => setTemperature(temperature-=1)}>-</button>
      </div>
    </div>
  )
}

export default App