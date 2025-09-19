

import './style.css/addstudents.css'

import React, { useState, useContext } from "react";
import { StudentContext } from "../components/context/StudentContext";
import { TextInput, Button } from "@mantine/core";
import StudentList from './StudentList';

const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [course,setCourse]=useState("");
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      addStudent({ name, age: Number(age) ,email,course});
      setName("");
      setAge("");
      setEmail("")
      setCourse("")
    }
  };

  return (

    <>
    <div className='heading-add'> 
      <h1 className='sub'>Add Student Details</h1>
    </div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <TextInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextInput
        label="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        style={{ marginTop: "10px" }}
      />
      <TextInput
        label="Email"
        
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        
      />
      <TextInput
        label="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />
      <Button type="submit" style={{ marginTop: "10px" }}>
        Add Student
      </Button>
    </form>


<StudentList/>
    </>
  
  );
};

export default StudentForm;

  