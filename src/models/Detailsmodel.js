const mongoose=require("mongoose");
const Detailstemplate=new mongoose.Schema({
RollNo:{
      type:Number,
      required:true,
      unique:true

      
     
  },
Name:{
    type:String,
    required:true
    
},
Address:{
    type:String,
    required:true
    
},
ContactNumber:{
    type:Number,
    required:true
    
},

Email:{
    type:String,
    required:true
}





})
module.exports=mongoose.model("user",Detailstemplate);