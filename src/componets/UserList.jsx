import React from 'react';

const UserList = ({Users,deleteUsers,selectedUsers}) => {
    return (
        <div className='list'>
            

  

           <ul>
             {
                Users.map(
                    user =>( <li key={user.id}>
                       <div className="card_list">
                        <h2> {user.first_name}  </h2> <h2>{user.last_name}</h2>
                        <h3> {user.email} </h3>
                        <h3> {user.password}</h3>
                        <h3> {user.birthday} </h3>

                       </div>
                        <button onClick={ ()=> selectedUsers(user)}>EDIT</button> <button onClick={()=> deleteUsers(user.id)}>DELETE</button>
                    </li>

                    
                    )
                )
             }
           </ul>


        </div>
    );
};

export default UserList;