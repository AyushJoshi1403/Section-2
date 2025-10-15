import MyButton from '@/components/Button';
import TextInput from '@/components/Input';
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

        <button className="btn">another button</button>

        <img src="/daemon1.jpg" alt="" />

        <MyButton>my custom button</MyButton>
        <MyButton>login</MyButton>
        <MyButton>submit</MyButton>

        <TextInput type="password" label="Enter a password" id="password" />
        <TextInput type="text" label="Full Name" id="name" />
        <TextInput type="email" label="Email Address" id="email" />
    </div>
  )
}

export default Home;