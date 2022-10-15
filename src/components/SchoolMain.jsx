import React, { useState, useEffect } from "react";
import axios from "axios";

function SchoolMain() {
  const [toggleState, setToggleState] = useState(1);
  const [staff, setStaff] = useState({});
  const [course, setCourse] = useState({});
  const [student, setStudent] = useState({});
  const [staffData,setStaffData] =useState({
    name:"",
    email:"",
    mobile:"",
    dob:"",
  })
  const [courseData,setCourseData] =useState({
    coursename:"",
    staffname:"",
   
  })
  const [studentData,setStudentData] =useState({
    studentname:"",
    studentemail:"",
    studentdob:"",
    bloodgroup:"",
    fathername:"",
    mothername:"",
    address:"",
    profilepic:"",
    coursenameupdate:"",
    staffnameupdate:"",
  })
  const updateStudentData = event =>
  setStudentData({
    ...studentData,
    [event.target.name]: event.target.value
  });
  const { studentname,studentemail,studentdob,bloodgroup,fathername,mothername,
    
    address,profilepic, coursenameupdate,staffnameupdate
  
  
  
  
  } = studentData;
  const updateCourseData = event =>
  setCourseData({
    ...courseData,
    [event.target.name]: event.target.value
  });
  const { coursename,staffname } = courseData;
  const updateFormData = event =>
  setStaffData({
    ...staffData,
    [event.target.name]: event.target.value
  });
  const { name, email, mobile, dob, } = staffData;
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


  const saveStaf=()=>{
    axios.post("https://61ef7787732d93001778e3c3.mockapi.io/staff",staffData)
    .then((response)=>{
      window.alert("data saved successfully")
    })
  }
console.log("000000",staffData)
  //   axios.get("")
  //   .then((response) =>{
  //     console.log("course",response)
  //     setCourse(response)
  //   })

  const toggleTab = (index) => {
    setToggleState(index);
  };
  console.log("staff", courseData);
  console.log("staffcfcfcfccff", studentData);
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
            <div>
              <form>
             
                 
                 
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
               <label>Name</label>
               <input  
               value={name}
               onChange={e => updateFormData(e)}
               placeholder="Name"
               type="text"
               name="name"
               required
               className="input-box" /> 
               </div>               
               <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
               <label>Email</label>
               <input  
                 value={email}
                 onChange={e => updateFormData(e)}
                 placeholder="Email"
                 type="text"
                 name="email"
                 required
               
               className="input-box" /> 
               </div>  
               <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
               <label>Mobile</label>
               <input 
                 value={mobile}
                 onChange={e => updateFormData(e)}
                 placeholder="Mobile"
                 type="number"
                 name="mobile"
                 required
               
               className="input-box" /> 
               </div>         
               <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
               <label>DOB</label>
               <input 
                 value={dob}
                 onChange={e => updateFormData(e)}
                 placeholder="DOB"
                 type="text"
                 name="dob"
                 required
               className="input-box" /> 
               </div>         
               
                 
                
               
                <button onClick={saveStaf()} >Save</button>
              </form>
           
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2 className="content_head">Course Details</h2>
            <hr />
            <form>
             
                 
                 
             <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label> Course Name</label>
             
                  <div>
                    <select className="input-box" style={{width:"14rem"}}
                    name="coursename"  value={coursename}   onSelect={e => updateCourseData(e)}
                    >
                    {Object.keys(course).map((item, i) => (
                     
                        <option value={i}  style={{padding:"10px"}} key={i}>{course[item].coursename}</option>
                      ))}

                    </select>
                  </div>
              
              {/* <input  
              value={coursename}
              onChange={e => updateCourseData(e)}
              placeholder="coursename"
              type="text"
              name="coursename"
              required
              className="input-box" />  */}
              </div>               
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Email</label>
              <input  
                value={staffname}
                onChange={e => updateCourseData(e)}
                placeholder="staffname"
                type="text"
                name="staffname"
                required
              
              className="input-box" /> 
              </div>  
                  
              
                
               
              
               <button  type="submit">Save</button>
             </form>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2 className="content_head">Staff Details</h2>
            <hr />
            <form>
             
                 
                 
             <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Name</label>
              <input  
              value={studentname}
              onChange={e => updateStudentData(e)}
              placeholder="Name"
              type="text"
              name="studentname"
              required
              className="input-box" /> 
              </div>               
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Email</label>
              <input  
                value={studentemail}
                onChange={e => updateStudentData(e)}
                placeholder="Email"
                type="text"
                name="studentemail"
                required
              
              className="input-box" /> 
              </div>  
                     
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>DOB</label>
              <input 
                value={studentdob}
                onChange={e => updateStudentData(e)}
                placeholder="DOB"
                type="text"
                name="studentdob"
                required
              className="input-box" /> 
              </div>  
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Blood group</label>
              <input 
                value={bloodgroup}
                onChange={e => updateStudentData(e)}
                placeholder="Blood group"
                type="text"
                name="bloodgroup"
                required
              className="input-box" /> 
              </div> 
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Father name</label>
              <input 
                value={fathername}
                onChange={e => updateStudentData(e)}
                placeholder="Father name"
                type="text"
                name="fathername"
                required
              className="input-box" /> 
              </div> 

              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Mother name</label>
              <input 
                value={mothername}
                onChange={e => updateStudentData(e)}
                placeholder="Mother name"
                type="text"
                name="mothername"
                required
              className="input-box" /> 
              </div>    
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Address</label>
              <input 
                value={address}
                onChange={e => updateStudentData(e)}
                placeholder="Address"
                type="text"
                name="address"
                required
              className="input-box" /> 
              </div> 
            
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Photo Upload</label>
              <input 
 
              type="file" id="file-input" 

                value={profilepic}
                onChange={e => updateStudentData(e)}
                placeholder="photo"
                name="profilepic"
              
                required
              className="input-box" /> 
              </div>     
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Course name</label>
              <input 
                value={coursenameupdate}
                onChange={e => updateStudentData(e)}
                placeholder="Course name"
                type="text"
                name="coursenameupdate"
                required
              className="input-box" /> 
              </div>     
              <div className="input-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <label>Staff name</label>
              <input 
                value={staffnameupdate}
                onChange={e => updateStudentData(e)}
                placeholder="Staff name"
                type="text"
                name="staffnameupdate"
                required
              className="input-box" /> 
              </div>  
              
                
               
              
               <button  type="submit">Save</button>
             </form>
            {/* <div className="staff-content-3">
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
                <h1 className="head">Email</h1>
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
                <h1 className="head">DOB</h1>
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
                <h1 className="head">Blood group</h1>
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
                <h1 className="head">Father name</h1>
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
                <h1 className="head">Mother name</h1>
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
                <h1 className="head">Address</h1>
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
                  <div style={{ display: "flex", flexDirection: "column" }}>
                   
                  


                  </div>
                ))}
              </div>
              <div>
                <h1 className="head">Course name</h1>
                {Object.keys(course).map((item, i) => (
                  <div>
                    <select className="input-box-3">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default SchoolMain;
