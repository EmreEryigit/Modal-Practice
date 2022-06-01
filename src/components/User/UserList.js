
import classes from "./UserList.module.css";
import React from 'react'
import Card from '../UI/Card'

function UserList(props) {
  return (
    <Card className={classes.users}>
       
        <ul>
            {props.users.map(user => <li key={Math.random().toString()}>{user.name} ({user.age}Years Old)</li> )}
        </ul>
    </Card>
  )
}

export default UserList
