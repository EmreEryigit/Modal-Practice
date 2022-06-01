import React,{useState} from 'react';
import NewUser from './components/User/NewUser';
import UserList from './components/User/UserList';


function App() {
  const [usersState, setUsersState] = useState([
    {
      name: "Emre",
      age: 25
    },
    {
      name: "Ceren",
      age: 22
    }
  ])
  const newUserHandler = (user) => {
    setUsersState(prevUsers => [...prevUsers, user])
  }
  
  return (
    <div>
      <NewUser addUser={newUserHandler} />
      <UserList users={usersState}/>
    </div>
  );
}

export default App;
