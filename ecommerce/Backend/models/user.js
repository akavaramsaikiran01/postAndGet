// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

const mongoose=require('mongoose');

const tempSchema = mongoose.Schema(
  {
    username: { type: String},
    email: { type: String, unique: true},
    password: { type: String }
  },
  { timestamps: true }
);
module.exports=mongoose.model("Users",tempSchema);