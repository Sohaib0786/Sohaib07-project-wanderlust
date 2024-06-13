/*
Model:Listing-------->place(Apartment,flat,house,villa,hotel)


* title: String
* desciption: String
* image: String
* price: number
* location: String
* country:String


* set:(v)=>v===" "?link:v
this is called a ternary operator
*/




const mongoose=require("mongoose");
//const { listingSchema } = require("../schema");
const Schema=mongoose.Schema;
const Review=require("./review.js");
  //const {number}=require("joi");


    const listingSchema=new Schema({
    title:{
      type:String,
      require:true,
    
    },

    description:String,
  
    image:{
      url:String,
      filename:String,
      
    },

     price:Number,

     location:String,

     country:String,

     reviews:[
      {
        type:Schema.Types.ObjectId,
        ref:"Review",
      },
     ],
       owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
       },


       /*
        GeoJSON is a format for storing geographic points and polygons. MongoDB has excellent support
        for geospatial queries on GeoJSON objects. let's take a look at how you can 
        use Mongoose to store and query GeoJSON objects.

       */

               
    geometry:{
      type:{
        type:String,//
        enum: ['Point'],
        required:true
      },

      coordinates: {
        type: [Number],
        required:true
      },
    },




/*
    category: {
      type: String,
      enum:["mountains","arctic", "farms","deserts",""]
    }
    */


});



       listingSchema.post("findOneAndDelete", async (listing) => {
       if(listing) {
     await Review.deleteMany({_id:{$in: listing.reviews}});
       }

 });


const Listing=mongoose.model("Listing",listingSchema);
  module.exports=Listing;
