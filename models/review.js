
/*
   New Model:Reviews
   --------------------

   * Comment---String
   * rating(1 to 5)----Number
   * createdAt----date,time



*/



const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const reviewSchema=new Schema({
    comment:String,
    rating: {
        type:Number,
        min:1,
        max:5

    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

module.exports=mongoose.model("Review",reviewSchema);