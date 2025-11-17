// Create the MongoDB database and insert the records either using interface or using Node.js program

const mongoose = require("mongoose");

// 1. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("MongoDB connected!");
})
.catch((err) => {
    console.log("Connection error:", err);
});

// 2. Create Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

// 3. Create Model
const Student = mongoose.model("Student", studentSchema);

// 4. Insert a record
const newStudent = new Student({
    name: "Baba",
    age: 20,
    city: "Mumbai"
});

// 5. Save the record
newStudent.save()
.then(() => {
    console.log("Record inserted successfully!");
    mongoose.connection.close(); // close connection
})
.catch((err) => {
    console.log("Insert error:", err);
});




