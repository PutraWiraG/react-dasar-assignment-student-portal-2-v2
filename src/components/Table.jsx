const Table = ({ students, setStudents }) => {
  const deleteStudent = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <table className="table table-hover" id="table-student">
      <thead className="table-primary">
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Faculty</th>
          <th>Program Study</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, i) => (
          <tr key={student.id} className="student-data-row">
            <td>{student.id}</td>
            <td>{student.fullname}</td>
            <td>{student.birthDate}</td>
            <td>{student.gender}</td>
            <td>{student.faculty}</td>
            <td>{student.programStudy}</td>
            <td>
              <button className="btn btn-danger" data-testid={`delete-${student.id}`} onClick={() => deleteStudent(student.id)}>
                {"Delete"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
