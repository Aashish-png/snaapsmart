import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,required: true,
  },
  lastName: {
    type: String, required: true,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;

// import { Document, Schema, model, models } from "mongoose";

// export interface User extends Document {
//     clerkId: string;
//     email: string;
//     username: string;
//     photo?: string; // Assuming photo is a URL or file path
//     firstName: string;
//     lastName: string;
//     planId: string;
//     creditBalance: number;
//     createdAt?: Date;
//     updatedAt?: Date;
// }

// const UserSchema = new Schema({
//     clerkId: { type: String, required: true , unique:true},
//     email: { type: String, required: true , unique:true },
//     username: { type: String, required: true , unique:true},
//     photo: { type: String ,required:true},
//     firstName: { type: String },
//     lastName: { type: String  },
//     planId: { type: Number,default:1 },
//     creditBalance: { type: Number, default: 10 },
  
// });

// const User = models?.User || model<User>('User', UserSchema);

// export default User;
