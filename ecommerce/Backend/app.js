const express = require("express");
const connectDB = require("./config/db");
const app = express();
const User = require("./models/user");
const cors = require("cors"); // Import CORS
const user = require("./models/user");

app.use(express.json());
app.use(cors()); // Allow all origins for now

connectDB()
  .then(() => {
    console.log("Database connected"); 
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.error("Database connection error:", err));


app.get("/users",async(req,res)=>{
    try{
        const allusers=await User.find();
        res.status(200).json(allusers);
    }
    catch(err)
    {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error" });
    }
})
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "Email already in use" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: savedUser }); // ✅ Only one response

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});



