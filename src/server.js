const express=require("express")
const app =express();
const mongoose=require("mongoose");
const Detailsmodel = require("./models/Detailsmodel");
const cors=require("cors");

mongoose.connect("mongodb://localhost:27017/users",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connection successfull");
})
.catch((err)=>{
    console.log(err)
});

app.use(express.json())
app.use(cors())

app.get("/studetails",async(req,res)=>{
    const data=await Detailsmodel.find();
    res.json(data);
    

})


app.post("/stuinfo",(request,response)=>{
    const studata=new Detailsmodel({
        RollNo:request.body.RollNo,
        Name:request.body.Name,
        Address:request.body.Address,
        ContactNumber:request.body.ContactNumber,
        Email:request.body.Email
    })
    studata.save()
    .then((data)=>{
        response.json(data)
       
      
    }).catch((err)=>{
        response.json(err)
    })


})


app.delete("/studelete/:id",async (req,res)=>{
        
            
   Detailsmodel.findOneAndDelete({
        "_id":req.params.id
    }).then((data)=>{
        res.json(data)
    }).catch((e)=>{
        res.json(e)
    })
   
   
  
  
})
    
    
app.listen(4000,()=>{
    console.log("server is up ans running");
})
