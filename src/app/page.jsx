import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center" >Hello React</h1>
        <button style={{ backgroundColor : 'black', color: 'white', padding: 10 }} >
          Home button
        </button>
        <br />
        <input type="text" />

        <button className="submit-btn">Home button</button>
    </div>
  )
}

export default Home;