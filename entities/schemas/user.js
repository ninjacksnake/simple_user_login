/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
import DBLocal from "db-local";
const { Schema } = new DBLocal({ path: "./databases/user.js" });

const User = Schema("User", {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  nationality: { type: String, required: true },
  favorites: { type: Array, default: ["Sports", "cook", "travel"] },
  createdAt: { type: String, required: true, default: Date.now.toString() },
});

export default User;
