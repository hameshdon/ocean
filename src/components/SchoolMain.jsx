import React,{useState,useEffect} from "react";
import axios from "axios";




function SchoolMain() {
    const [toggleState, setToggleState] = useState(1);
    const [staff, setStaff] = useState({});
    const [course, setCourse] = useState({});
    // useEffect(() => {
    //     fetch(`https://61ef7787732d93001778e3c3.mockapi.io/Staff`)
    //      .then((response) => {
    //         console.log(response.json)
    //         setStaff(response)
        
    //     });
    //    }, []);
 
  useEffect(() => {
    axios.get("https://61ef7787732d93001778e3c3.mockapi.io/Staff")
      .then((response) =>{
        console.log(response)
        setStaff(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },[])

    useEffect(() => {
        axios.get("https://61ef7787732d93001778e3c3.mockapi.io/course")
          .then((response) =>{
            console.log(response)
            setCourse(response.data)
          }).catch((error) => {
            console.log(error)
          })
        },[])

    //   axios.get("")
    //   .then((response) =>{
    //     console.log("course",response)
    //     setCourse(response)
    //   })
      
  
 
 

 

    const toggleTab = (index) => {
      setToggleState(index);
    };
    console.log("staff",staff)
    console.log("course",course)
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
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2 className="content_head">Staff Details</h2>
            <hr />
            <div className="staff-content">
           <div>
            <h1>Name</h1>
            { Object.keys(staff).map((item, i) => (
               <div>
               <input className="input-box" type="text"  value={staff[item].name} />
               </div>
            // <div key={i} className="report">
            //         <h3>{staff[item].name}</h3>
            // </div>
    ))}
    </div>
    <div>
    <h1>Email</h1>
            { Object.keys(staff).map((item, i) => (
               <div>
               <input className="input-box" type="text"  value={staff[item].email} />
               </div>
    ))}
    </div>
    <div>
    <h1>Mobile</h1>
            { Object.keys(staff).map((item, i) => (
               <div>
               <input className="input-box" type="text"  value={staff[item].mobile} />
               </div>
    ))}
    </div>
    <div>
    <h1>DOB</h1>
            { Object.keys(staff).map((item, i) => (
               <div>
               <input className="input-box" type="text"  value={staff[item].dob} />
               </div>
    ))}
    </div>
</div>
           
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2 className="content_head" >Content 2</h2>
            <hr />
           
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2 className="content_head">Content 3</h2>
            <hr />
           
          </div>
        </div>
      </div>
      </>

    )
}
export default SchoolMain;