// components/StudentList.jsx
import React from "react";
import styles from "./Portal.module.css";

const Portal = () => {
  const dummyStudents = [
    { id: 1, name: "John Doe", grade: "10", age: 15, sex: "Male" },
    { id: 2, name: "Jane Doe", grade: "11", age: 16, sex: "Female" },
    { id: 3, name: "Bobby Brown", grade: "9", age: 14, sex: "Male" },
    { id: 4, name: "Alice Johnson", grade: "12", age: 17, sex: "Female" },
  ];

  return (
    <div className={styles.studentListContainer}>
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Age</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {dummyStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.age}</td>
              <td>{student.sex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portal;
