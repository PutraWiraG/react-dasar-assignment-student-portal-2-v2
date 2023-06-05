import { useState } from "react";

const Form = (props) => {
  const [getFullName, setFullName] = useState("");
  const [getDate, setDate] = useState("");
  const [getGender, setGender] = useState("");
  const [getPrody, setPrody] = useState("");

  const cekFaculty = () => {
    const tempData = {
      fullname: getFullName,
      birthDate: getDate,
      gender: getGender,
      faculty: "",
      programStudy: getPrody,
    };
    const prodi = tempData["programStudy"];

    if (prodi === "Ekonomi" || prodi === "Akuntansi" || prodi === "Manajemen") {
      tempData["faculty"] = "Fakultas Ekonomi";
    } else if (prodi === "Administrasi Bisnis" || prodi === "Administrasi Publik" || prodi === "Hubungan Internasional") {
      tempData["faculty"] = "Fakultas Ilmu Sosial dan Politik";
    } else if (prodi === "Teknik Sipil" || prodi === "Arsitektur") {
      tempData["faculty"] = "Fakultas Teknik";
    } else {
      tempData["faculty"] = "Fakultas Teknologi Informasi dan Sains";
    }

    return tempData;
  };

  const addStudent = async (e) => {
    e.preventDefault();
    const newData = await cekFaculty();

    props.createStudent(newData);

    setFullName("");
    setDate("");
    setGender("");
    setPrody("");
  };

  return (
    <div id="form-student">
      <form onSubmit={addStudent}>
        <div className="mb-3">
          <label className="form-label" htmlFor="input-name">
            Fullname
          </label>
          <input type="text" className="form-control" id="input-name" data-testid="name" onChange={({ target }) => setFullName(target.value)} value={getFullName} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="input-date">
            Birth Date
          </label>
          <input type="date" className="form-control" id="input-date" data-testid="date" onChange={({ target }) => setDate(target.value)} value={getDate} />
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="input-gender">
                Gender
              </label>
              <select id="input-gender" className="form-select" data-testid="gender" onChange={({ target }) => setGender(target.value)} value={getGender}>
                <option></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label" htmlFor="input-prody">
                Program Study
              </label>
              <select id="input-prody" className="form-select" data-testid="prody" onChange={({ target }) => setPrody(target.value)} value={getPrody}>
                <option></option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">Hubungan Internasional</option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </select>
            </div>
          </div>
        </div>
        <input type="submit" value={"Add student"} id="add-btn" className="btn btn-primary" data-testid="submit" />
      </form>
    </div>
  );
};

export default Form;
