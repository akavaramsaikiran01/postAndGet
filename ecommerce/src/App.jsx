

// import './App.css'

import { useState ,useEffect} from "react"


function App() {

const [mail,setMail]=useState("");
const [password,setPassword]=useState("");
const [user,setUser]=useState("");
const [users,setUsers]=useState([]);
  
useEffect(()=>{
  fetch("http://localhost:3000/users")
  .then((res)=>res.json())
  .then((data)=>setUsers(data))
  .catch((err)=>console.log(err));
})

const handleSubmit = async () => {
try
{
 const response= await fetch('http://localhost:3000/signup', {
  method:'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: user, email: mail, password: password }),
 })
 if(!response.ok)
 {
    throw new Error("Failed to submit");
 }
 const data=await response.json();
 console.log("response: ",data);

 //fetching data and adding to the users

 fetch("http://localhost:3000/users")
 .then((res)=>res.json())
 .then((data)=>setUsers(data))
 .catch((err)=>console.log(err));

}
catch(error){
  console.log(error);

}



}
function handleChange(event){
  const {name,value}=event.target;
  if(name==="username")
  {
    setUser(value);
  }
  else if(name==="email")
  {
    setMail(value);
  }
  else if(name==="password")
  {
    setPassword(value);
  }
}

  return (
    <>
      <h1>Login page</h1>
      <br/>
      <input type="text" value={user} name="username" onChange={handleChange}></input>
      <br/>
      <br/>
      <input type="text" value={mail} name="email" onChange={handleChange}></input>
      <br/>
      <br/>
      <input type="password" value={password} name="password" onChange={handleChange}></input>

      <button onClick={handleSubmit} >Submit</button>

      <h2>Users List</h2>
      <ol>
      {users.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ol>

    </>
  )
}

export default App
