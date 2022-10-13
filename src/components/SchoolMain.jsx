import React, { useState, useEffect } from "react";
import axios from "axios";

function SchoolMain() {
  const [toggleState, setToggleState] = useState(1);
  const [staff, setStaff] = useState({});
  const [course, setCourse] = useState({});
  const [student, setStudent] = useState({});
 

  useEffect(() => {
    axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/Staff")
      .then((response) => {
        console.log(response);
        setStaff(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/course")
      .then((response) => {
        console.log(response);
        setCourse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/student")
      .then((response) => {
        console.log(response);
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   axios.get("")
  //   .then((response) =>{
  //     console.log("course",response)
  //     setCourse(response)
  //   })

  const toggleTab = (index) => {
    setToggleState(index);
  };
  console.log("staff", staff);
  console.log("course", course);
  console.log("student", student);
  return (
    <>
      <div className="heading">
        <h1>School Management Application</h1>
      </div>

      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Staff
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Course
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Student
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2 className="content_head">Staff Details</h2>
            <hr />
            <div className="staff-content">
              <div>
                <h1  className="head">Name</h1>
                {Object.keys(staff).map((item, i) => (
                  <div>
                    <input
                      className="input-box"
                      type="text"
                      value={staff[item].name}
                    />
                  </div>
                  // <div key={i} className="report">
                  //         <h3>{staff[item].name}</h3>
                  // </div>
                ))}
              </div>
              <div>
                <h1  className="head">Email</h1>
                {Object.keys(staff).map((item, i) => (
                  <div>
                    <input
                      className="input-box"
                      type="text"
                      value={staff[item].email}
                    />
                  </div>
                ))}
              </div>
              <div>
                <h1  className="head">Mobile</h1>
                {Object.keys(staff).map((item, i) => (
                  <div>
                    <input
                      className="input-box"
                      type="text"
                      value={staff[item].mobile}
                    />
                  </div>
                ))}
              </div>
              <div>
                <h1  className="head">DOB</h1>
                {Object.keys(staff).map((item, i) => (
                  <div>
                    <input
                      className="input-box"
                      type="text"
                      value={staff[item].dob}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2 className="content_head">Course Details</h2>
            <hr />
            <div className="staff-content">
              <div>
                <h1  className="head">Course name</h1>
                {Object.keys(course).map((item, i) => (
                  <div>
                    <input
                      className="input-box"
                      type="text"
                      value={course[item].coursename
                      }
                    />
                  </div>
                  
                ))}
              </div>
              <div>
                <h1  className="head">Staff name</h1>
                {Object.keys(course).map((item, i) => (
                  <div>
                    <select   className="input-box">
                    {Object.keys(item).map((item2, i2) => (
                        <option  key={i}>{course[item2].staffName[i2]}</option>
                        ))}
                    </select>
                   
                   
                  </div>
                ))}
              </div>
             
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2 className="content_head">Staff Details</h2>
            <hr />
            <div className="staff-content-3">
              <div>
                <h1 className="head">Name</h1>
                {Object.keys(student).map((item, i) => (
                  <div>
                    <input
                      className="input-box-3"
                      type="text"
                      value={student[item].name}
                    />
                  </div>
                  // <div key={i} className="report">
                  //         <h3>{staff[item].name}</h3>
                  // </div>
                ))}
              </div>
              <div>
                <h1  className="head">Email</h1>
                {Object.keys(student).map((item, i) => (
                  <div>
                    <input
                      className="input-box-3"
                      type="text"
                      value={student[item].email}
                    />
                  </div>
                ))}
              </div>
              <div>
                <h1  className="head">DOB</h1>
                {Object.keys(student).map((item, i) => (
                  <div>
                    <input
                      className="input-box-3"
                      type="text"
                      value={student[item].dob}
                    />
                  </div>
                ))}
              </div>
              <div>
                <h1  className="head">Blood group</h1>
                {Object.keys(student).map((item, i) => (
                  <div>
                    <input
                      className="input-box-3"
                      type="text"
                      value={student[item].bloodgroup}
                    />
                  </div>
                ))}
              </div>
              <div>
                <h1  className="head">Father name</h1>
                {Object.keys(student).map((item, i) => (
                  <div>
                    <input
                      className="input-box-3"
                      type="text"
                      value={student[item].fathername}
                    />
                  </div>
                ))}
              </div>
              <div>
                <h1  className="head">Mother name</h1>
                {Object.keys(student).map((item, i) => (
                  <div>
                    <input
                      className="input-box-3"
                      type="text"
                      value={student[item].mothername}
                    />
                  </div>
                ))}
              </div>
              <div>
                <h1 className="head" >Address</h1>
                {Object.keys(student).map((item, i) => (
                  <div>
                    <input
                      className="input-box-3"
                      type="text"
                      value={student[item].address}
                    />
                  </div>
                ))}
              </div>
              <div>
                <h1 className="head">Student photo</h1>

              
                {Object.keys(student).map((item, i) => (
                   <div style={{display:"flex",flexDirection:"column"}}>
                   <input type="file" id="file-input" name="ImageStyle"/>
               </div>
                ))}
              </div>
              <div>
                <h1 className="head">Course name</h1>
                {Object.keys(course).map((item, i) => (
                  <div>
                    <select  className="input-box-3">
                    {Object.keys(course).map((item, i) => (
                        <option key={i}>{course[item].coursename}</option>
                        ))}
                    </select>
                   
                   
                  </div>
                ))}
              </div>
              <div>
                <h1 className="head">Staff name</h1>
                {Object.keys(student).map((item, i) => (
                  <div>
                    <input
                      className="input-box-3"
                      type="text"
                      value={student[item].mothername}
                    />
                  </div>
                ))}
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SchoolMain;
