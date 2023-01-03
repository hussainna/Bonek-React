import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import Header from '../../common/header/Header';

function Login() {

    const [Input, setInput]=useState({
        email:'',
        password:'',
        error_list:[],
        })
        const history=useHistory();

    const handleInput=(e)=>{
        e.persist();
        setInput({...Input,[e.target.name]:e.target.value});
    }

    const SubmitInput=(e)=>{
        e.preventDefault();
        const data={
            email:Input.email,
            password:Input.password,
        }
        
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('api/login',data).then(res=>{
                        if(res.data.status===200)
                        {
                            localStorage.setItem('auth_token',res.data.token)
                            localStorage.setItem('auth_username',res.data.username)
                            swal('Success',res.data.message)
                            history.push('/')
                        }
                        else
                        {
                           setInput({...Input,error_list:res.data.validation_errors});
                        }
                    })
                })

    }


  return (
    <>
    <Header/>
    <div className='login register'>
        
      <div className="container">
      <form onSubmit={SubmitInput}>
         <div className="form-group">
         <label htmlFor="email">Email address:</label>
         <input type="email" className="form-control" onChange={handleInput} name='email' value={Input.email} />
         <span>{Input.error_list.email}</span>

         </div>
         <div className="form-group">
         <label htmlFor="pwd">Password:</label>
         <input type="password" className="form-control" onChange={handleInput} name='password' value={Input.password} id="pwd" />
         <span>{Input.error_list.password}</span>
         </div>
         <div className="checkbox">
         <label><input type="checkbox" /> Remember me</label>
         </div>
         <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </div>
    </div>
    </>
  )
}

export default Login