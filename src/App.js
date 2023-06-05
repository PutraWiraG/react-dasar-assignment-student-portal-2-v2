import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    renderStudent();
  }, []);

  const renderStudent = () => {
    fetch("http://localhost:3001/student")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const createStudent = async (newData) => {
    try {
      await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      renderStudent();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading === true) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  if (error != null) {
    return (
      <div>
        <p>Error...</p>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card" style={{ width: "80%" }}>
          <div className="card-header">Student Portal</div>
          <div className="card-body">
            <Form createStudent={createStudent} />
            <hr />
            <Table students={data} setStudents={setData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
