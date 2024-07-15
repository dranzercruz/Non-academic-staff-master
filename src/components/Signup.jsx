import { useState } from "react";
import "../css/signup.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  const [error,setError] = useState({});

  const [user, setUser] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    confirmpassword:"",
    date_of_birth:"",
    phone_no:"",
    gender:"",
    address:"",
    city:"",
    ic_no:"",
    emp_id:"",
    job_type:"",
    postal_code:"",
    department:"",
    faculty:"",
  })

  const handleInput = (e) => {
    setError({});
    const {name,value} = e.target;
    setUser((prevUser) => ({...prevUser, [name]: value}))
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    const {first_name,last_name,email,password,confirmpassword,date_of_birth,phone_no,gender,address,city,ic_no,
      emp_id,job_type,postal_code,department,faculty} = user;
    
    if(password != confirmpassword){
      alert("Password and Confirm Password does not match");
      setError({border:"2px solid red"});
      return;
    }

    try{
      await axios.post("http://localhost:8080/auth/signup", {first_name,last_name,email,password,date_of_birth,phone_no,gender,address,city,ic_no,
        emp_id,job_type,postal_code,department,faculty});

      alert("register sucessfully");
      Navigate("/login");

    }catch{
      console.log("error")
    }

  }
  
  return (
    <>
      <div className="signup">
        <div className="signup-container">

          <h2>Registration Form</h2>
          <p>Fill about yourself here..</p>

          <form onSubmit={handleSubmit}>
            
            <div className="half">
              <div className="firstname">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" placeholder="fistname" name="first_name" onChange={handleInput} value={user.first_name} required/>
              </div>
              <div className="lastname">
                <label htmlFor="fistname">Lastname</label>
                <input type="text" id="lastname" placeholder="lastname" name="last_name" onChange={handleInput} value={user.last_name} />
              </div>
            </div>

            <div className="half">
              <div className="bdate">
                <label htmlFor="bdate">Date of birth</label>
                <input type="date" id="bdate" name="date_of_birth" onChange={handleInput} value={user.date_of_birth}/>
              </div>
              <div className="gender">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={handleInput} value={user.gender}>
                  <option value="">select one....</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>

            <div className="half">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="abc@gmail.com" name="email" onChange={handleInput} value={user.email} required/>
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone No</label>
                <input type="tel" id="phone" placeholder="123456789" name="phone_no" onChange={handleInput} value={user.phone_no} required/>
              </div>
            </div>

            {/* <div className="half">
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={user.username} onChange={handleInput} placeholder="user name" required />
              </div>
            </div> */}
      
            <div className="half">
              <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="password" name="password" onChange={handleInput} value={user.password} required/>
              </div>
              <div className="confirmpassword">
                <label htmlFor="confirmpassword">Confirm password</label>
                <input type="password" id="confirmpassword" style={error} placeholder="confirmpassword" name="confirmpassword" onChange={handleInput} value={user.confirmpassword} required/>
              </div>
            </div>

            <div className="half">
              <div>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="address" name="address" onChange={handleInput} value={user.address} required/>
              </div>
            </div>

            <div className="half">
              <div className="city">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="city" name="city" onChange={handleInput} value={user.city} required/>
              </div>
              <div className="postalcode">
                <label htmlFor="postalcode">Postal code</label>
                <input type="number" id="postalcode" placeholder="postalcode" name="postal_code" onChange={handleInput} value={user.postal_code} required/>
              </div>
            </div>

            <div className="half">
              <div className="ic">
                <label htmlFor="ic">Identy card</label>
                <input type="text" id="ic" placeholder="9623213v" name="ic_no" onChange={handleInput} value={user.ic_no} required/>
              </div>
              <div className="emp_id">
                <label htmlFor="emp_id">Employee_id</label>
                <input type="number" id="emp_id" placeholder="emp_id" name="emp_id" onChange={handleInput} value={user.emp_id} required/>
              </div>
            </div>

            <div className="half">
              <div className="job_type">
                <label htmlFor="job_type">Job_type</label>
                <input type="text" id="job_type" placeholder="job_type" name="job_type" onChange={handleInput} value={user.job_type} required/>
              </div>
              {/* <div className="role">
                <label htmlFor="role">Are you </label>
                <select name="role" id="role" onChange={handleInput} value={user.role} required>
                  <option value="">select one....</option>
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </div> */}
            </div>

            <div className="half">
              <div className="department">
                <label htmlFor="department">Department</label>
                <input type="text" id="department" placeholder="department" name="department" onChange={handleInput} value={user.department} required/>
              </div>
              <div className="Faculty">
                <label htmlFor="faculty">Faculty</label>
                <select name="faculty" id="faculty" onChange={handleInput} value={user.faculty} required>
                  <option value="">select one....</option>
                  <option value="engineering">Engineering</option>
                  <option value="arts">Arts</option>
                  <option value="science">Science</option>
                  <option value="management">Management</option>
                  <option value="medical">Medical</option>
                  <option value="vetenary">Vetenary</option>
                </select>
              </div>
            </div>

            <div className="signup-submit-btn">
              <input type="submit" value={"Submit"} />
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
