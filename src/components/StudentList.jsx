import React, { useContext } from "react";
import { StudentContext } from "../components/context/StudentContext";
import { Card, Text } from "@mantine/core";

const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <div className="list">
      {students.map((student) => (
        <Card key={student.id} shadow="sm" padding="lg" style={{ margin: "10px 0" }}>
          <Text>Name: {student.name}</Text>
          <Text>Age: {student.age}</Text>
          <Text>Email: {student.email}</Text>
          <Text>Course: {student.course}</Text>
        </Card>
      ))}
    </div>
  );
};

export default StudentList;

