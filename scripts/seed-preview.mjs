import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Set MONGODB_URI first.");
await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
const schema = new mongoose.Schema({
 groupId:{type:String,required:true,unique:true}, slug:{type:String,required:true,unique:true,lowercase:true},
 imageUrl:{type:String,default:null}, title:{type:String,default:"ZetaMD"}, description:{type:String,default:"Welcome to the ZetaMD community."},
 useDefaultBanner:{type:Boolean,default:true}, enabled:{type:Boolean,default:true}
},{timestamps:true,collection:"group_previews"});
const Model=mongoose.models.GroupPreview||mongoose.model("GroupPreview",schema);
for (const row of [
 {groupId:"TEST_GROUP_A",slug:"grup-a",title:"ZetaMD — Grup A",description:"Preview banner untuk Grup A."},
 {groupId:"TEST_GROUP_B",slug:"grup-b",title:"ZetaMD — Grup B",description:"Preview banner untuk Grup B."}
]) await Model.updateOne({slug:row.slug},{$set:{...row,imageUrl:null,useDefaultBanner:true,enabled:true}},{upsert:true});
console.log("Seeded grup-a and grup-b in group_previews.");
await mongoose.disconnect();
