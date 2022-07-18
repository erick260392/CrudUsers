import React, { useEffect, useState } from 'react';

const UserForm = ({addUsers,SelectUsers,deselectectUser,updateUsers}) => {

    const [FistName, setFistName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Birthday, setBirthday] = useState("")

    
    useEffect(() => {

        if(SelectUsers !== null)
        {

            setLastName(SelectUsers.last_name);
            setFistName(SelectUsers.first_name);
            setEmail(SelectUsers.email);
            setPassword(SelectUsers.password);
            setBirthday(SelectUsers.birthday);
        }else{
            reset();
        }

    }, [SelectUsers])
    
    
    const reset = ()=> 
    {
        setFistName("");
        setFistName("");
        setEmail("");
        setPassword("");
        setBirthday("");
    }
    
    
    const submit = e =>{
        e.preventDefault();  {
         
            const Users = 
                {
                    password:Password,
                    birthday:Birthday,
                    first_name:FistName,
                    last_name:LastName,
                    email:Email,
                }
            if (SelectUsers !== null) {
                Users.id = SelectUsers.id
                alert("creando");
                updateUsers(Users);
                deselectectUser();
                
                
            }else{
                addUsers(Users);
                reset();

            }
            
     
            }

    }



    return (
        <div className='form'>
            <form onSubmit={submit}>
                <div className="input_container">
                <label htmlFor="firstname">First Name: </label>
                <input type="text" id="firstname" placeholder= "First Name" value={FistName}  onChange={e => setFistName(e.target.value)}/>
                </div>
                <div className="input_container">
                <label htmlFor="lastname">Last Name: </label>
                <input type="text"  id="lastname"  value={LastName}  onChange={e => setLastName(e.target.value)}/>

                </div>
                <div className="input_container">
                <label htmlFor="email">Email: </label>
                <input type="text"  id="email"  value={Email}  onChange={e => setEmail(e.target.value)} />

                </div>
                <div className="input_container">
                <label htmlFor="password">Password: </label>
                <input type="text"  id="password"  value={Password}  onChange={e => setPassword(e.target.value)}/>

                </div>
                <div className="input_container">
                <label htmlFor="birthday">Birthday: </label>
                <input type="date"  id="birthday"  value={Birthday}  onChange={e => setBirthday(e.target.value)} />

                </div>
                    
                <button>{SelectUsers !== null ? "Update": "Create"} </button>
                        {SelectUsers !== null &&  <button onClick={ deselectectUser} type='button'>  Clear </button>}
                
                
             
            </form>
        </div>
    );
};

export default UserForm;