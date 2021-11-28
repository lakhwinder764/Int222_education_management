import React,{useState,useEffect} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "axios";
import Swal from 'sweetalert2'
const App=(props)=> {
   
  const [validate,setvalidate]=useState({
    RollNo:true,
    Name:true,
    Address:true,
    ContactNumber:true,
    Email:true
  })
  const [user,setuser]=useState({
    RollNo:"",
    Name:"",
    Address:"",
    ContactNumber:"",
    Email:""
  })
   
   
  const change=(e)=>{
     let name,value;
     name=e.target.name;
     value=e.target.value;
     setuser({...user,[name]:value})
     setvalidate({...validate,[name]:false})

  }  

const submit=async(e)=>{
    e.preventDefault();
    if(user.ContactNumber.length>10 || user.ContactNumber.length<10){
      Swal.fire(
      'Error!',
      'phone no should be of 10 digits',
      'error'
    )
     
   }
  
    if(user.RollNo && user.Address && user.Email && user.Name && user.ContactNumber.length===10){
      await axios.post("http://localhost:4000/stuinfo",user)
      Swal.fire(
        'Good Job!',
        'Data Entered Successfully!',
        'success'
      )
      setuser({
        RollNo:"",
        Name:"",
        Address:"",
        ContactNumber:"",
        Email:""
  
      })
    }
  
   

  }


return (
  
   <div class = "form">
    <form  class="form1">

    <div class="form-group">
    <label class=" label" >RollNo</label>
    <input type="number" class="form-control"  name="RollNo" value={user.RollNo} onChange={change}  placeholder="Enter your roll no"/>
   { validate.RollNo?<p style={{color:"red"}}></p>:<p style={{color:"green",backgroundColor:"black" }}>field entered successfully </p>}
  </div>


  <div class="form-group">
    <label class=" label">Name</label>
    <input type="text" class="form-control" name="Name" value={user.Name}  onChange={change}  placeholder="Enter your name"/>
    { validate.Name?<p style={{color:"red"}}></p>:<p style={{color:"green",backgroundColor:"black" }}>field entered successfully </p>}
  </div>
  


  <div class="form-group">
    <label  class=" label">Address</label>
    <input type="text" class="form-control" name="Address" value={user.Address}  onChange={change}  placeholder="Enter your address"/>
    { validate.Address?<p style={{color:"red"}}></p>:<p style={{color:"green",backgroundColor:"black" }}>field entered successfully </p>}
  </div>
  


  <div class="form-group">
    <label class=" label">Contact Number</label>
    <input type="number" class="form-control" name="ContactNumber" value={user.ContactNumber}  onChange={change}  placeholder="Enter your contact number"/>
    { validate.ContactNumber?<p style={{color:"red"}}></p>:<p style={{color:"green",backgroundColor:"black" }}>field entered successfully </p>}
  </div>
  


  <div class="form-group">
    <label class=" label">Email address</label>
    <input type="email" class="form-control" name="Email" value={user.Email} onChange={change} placeholder="Enter email"/>
    { validate.Email?<p style={{color:"red"}}></p>:<p style={{color:"green",backgroundColor:"black" }}>field entered successfully </p>}
   </div>
   <br/>


  
  
  <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
  
</form>
</div>

   
       
  );
}

export default App;
