import React, { useState } from 'react'

const Form = () => {
    
    const [formData, setFormData] = useState({
        
        username:'',

        email:'',

        password:'',

    });

    const[errors, setErrors] = useState({})


    const validate = ()=> {
       
        const newErrors = {};

        if(!formData.username)newErrors.username = 'Username is required';

        if(!formData.email)newErrors.email = 'Email is required';

        else if(!/\S+@\S+/.test(formData.email))newErrors.email = 'Email is invalid';

        if(!formData.password)newErrors.password = 'Password is required';

        else if (formData.password.length < 6)newErrors.password = 'password must be at atleast 6 characters'

        else if (!/[A-Z]/.test(formData.password))newErrors.password = 'password must contain one upper case character'

        return newErrors;
    };

    const handleChange = (e) => {

        const { name, value } = e.target;
        
        setFormData({

            ...formData,
            [name]:value

        });

    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        const validateErrors = validate();

        if(Object.keys(validateErrors).length ===0){

            console.log('form data is invalid:',formData);

            setFormData({

                username:'',
                email : '',
                password : ''
            })
            
            setErrors({});
        }else {

            setErrors(validateErrors);

        }
        };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
<label>Username</label>
<input 
type = "text"

name = "username"

value ={formData.username}

onChange={handleChange}

/>

{errors.username && <p className="error">{errors.username}</p>}
        </div>
        

        <div>
<label>Email</label>
<input 
type = "email"

name = "email"

value ={formData.email}

onChange={handleChange}

/>

{errors.email && <p className="error">{errors.email}</p>}
        </div>
        
        <div>
<label>Password</label>
<input 
type = "password"

name = "password"

value ={formData.password}

onChange={handleChange}

/>

{errors.password && <p className="error">{errors.password}</p>}
        </div>
        
        <button type="submit">SUBMIT</button>

      </form> 
    </> 
  );
};

export default Form