import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const User = () => {
   
   
   
   const [Users, setUsers] = useState([])
   const [SelectUsers, setSelectUsers] = useState(null)


   useEffect(() => {
     
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsers(res.data));
    
         
   }, [])


   const getUsers = () =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsers(res.data));
    
   }

   const addUsers = (Users)=> {
    axios.post("https://users-crud1.herokuapp.com/users/",Users)
    .then(()=> getUsers() )
    .catch(error =>console.log(error.reponse))
   }


   const deleteUsers = (id)=>{
    alert(`eliminando ${id}`)
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=> getUsers() )
    .catch(error =>console.log(error.reponse))
   }
 


   const selectedUsers = (user)=>{ 
    alert(`editando ${user.first_name}`)
    setSelectUsers(user)

     

   }

   const deselectectUser = ()=>{
    setSelectUsers(null)
   }


   const updateUsers = (Users)=> {

    axios.put(`https://users-crud1.herokuapp.com/users/${Users.id}/`, Users)
    .then(() => getUsers() )
    .catch(error =>console.log(error.reponse))
   }

 console.log(SelectUsers);
      
   
    return (
        <div className='card'>


       <UserForm
       updateUsers={updateUsers}
       addUsers={addUsers}
       SelectUsers={SelectUsers}
       deselectectUser={deselectectUser}
       ></UserForm>

       <UserList
       
       Users={Users}
       deleteUsers={deleteUsers}
       selectedUsers={selectedUsers}
      ></UserList>
            
        </div>
    );
};

export default User;