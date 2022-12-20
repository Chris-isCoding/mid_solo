import React, { useState} from "react";

function Register({onFormSwitch}) {
  const [email,setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  return (
    <>
      <form>
        <label htmlFor="name">Full Name</label>
        <input onChange={(e) => setName(e.target.value)} value={name} name="name" id="name" placeholder="Full name here" ></input>
        <br></br>
        <label htmlFor="email">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="email" placeholder="JohnDoe@email.com" type="email"></input>
        <br></br>
        <label htmlFor="password">Enter a password</label>
        <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" placeholder="*****" id="password"></input>
      </form>
      <br></br>
      <button onClick={()=>onFormSwitch('login')}>Have an account? Click here </button>
    </>
  )
}

export default Register