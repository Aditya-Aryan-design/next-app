import mongoose from "mongoose";

mongoose.connect(process.env.DB).then(()=>console.log("connected")).catch((e)=>console.log(e))

export default mongoose