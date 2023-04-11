import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import  {useHistory} from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const handleLogin = (e)=>{
   console.log(e);
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      console.log("fjsdlfjs");
      console.log(error);
      alert(error)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=> setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=> setpassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          history.push('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
