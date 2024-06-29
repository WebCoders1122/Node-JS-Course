const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  pincode: { type: Number, required: true },
  street: { type: String, required: true },
  phone: { type: String, maxLength: [10, "Invalid Phone Number"] },
});

const userSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 16 },
  lastName: { type: String, maxLength: 16 },
  age: {
    type: Number,
    required: true,
    min: [12, "You are Under Age"],
    max: [100, "You Are over Age"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  address: { type: addressSchema, required: true },
});

exports.User = mongoose.model("User", userSchema);

// firstName is required, maximum length 16 chars
// lastName is not required, maximum length 16 chars
// age is a Number, minimum value 12, maximum 100
// email make a validator of email, as given in mongoose documentation.
// address make address a nested data structure which has its own Schema [ AddressSchema ??] [ Hint: check mongoose documentation for sub-documents to do it

// Create addressSchema needed in above example as :

// pincode : Number, required
// street : String, required
// phone: String, length=10
