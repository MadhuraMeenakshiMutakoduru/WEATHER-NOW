import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='app'>
      <h2 className='line'>Welcome, Jamie! 🌈 Check today’s weather</h2>
      <Weather/>
    </div>
  )
}

export default App;
