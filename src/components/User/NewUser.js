import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./NewUser.module.css";
function NewUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length >= 0) {
      setName(event.target.value);
    }
  };
  const ageChangeHandler = (event) => {
    if (event.target.value >= 0 && event.target.value < 99) {
      setAge(event.target.value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length > 0 && +age > 0 && +age < 120) {
      props.addUser({ name, age });
      setName("");
      setAge("");
    } else {
      setError(true);
    }
  };
  return (
    <div>
    {error && <ErrorModal title="An error Occured!"  message="Name and age must be valid" setError={setError} />}
      <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={nameChangeHandler}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
    
  );
}

export default NewUser;
