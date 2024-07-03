/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import SessionValidator from "./middlewares/sessionValidator.js";
import userRepository from "./repositories/user-repository.js";
const User = userRepository();

dotenv.config();

// App
const app = express();

const PORT = process.env.PORT ?? 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
// check the request for the req.body json and make it available
app.use(SessionValidator);
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res) => {
  const { user } = req.session;
  if (user) {
    return res.render("userdetails", { user });
  }
  return res.render("login");
});

app.get("/login", async (req, res) => {
  const { user } = req.session;
  if (user) {
    return res.render("userdetails", { user });
  }
  return res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login({ username, password });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.cookie("access_token", user.token, {
      httpOnly: true, // the cookie only can be accessed on the server
      secure: process.env.NODE_ENV === "production", // the cookie only can be accessed in http
      sameSite: "strict", // the cookie only can be accessed on the same domain
      maxAge: 1000 * 60 * 60, // the cookie will expire in one hour
    });
    return res.render("userdetails", { user });
  } catch (error) {
    return res.status(500).send(error.message); // Changed to status 500 for server errors
  }
});

app.get("/register", (req, res) => {
  const { user } = req.session;
  if (user) {
    return res.render("userdetails", { user });
  }
  return res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password, email, nationality, age } = req.body;
  console.log(username, password, email, nationality, age);
  try {
    const user = await User.create({
      username,
      password,
      email,
      nationality,
      age,
    });
    return res.render("userdetails", { user });
  } catch (err) {
    console.log(err);
    return res.render("error", {
      message: "Unable to register",
      errorCode: 500,
    });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.send(users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.delete("/user", async (req, res) => {
  const id = req.query._id;
  try {
    await User.deleteUser(id);
    return res.send({ message: "deleted" });
  } catch (err) {
    return res.status(400).send({
      error: err.message,
    });
  }
});

app.get("/logout", (req, res) => {
  res
    .clearCookie("access_token")
    .status(401)
    // .json({ message: "logged out successfully" })
    .redirect("/");
});

app.get("/userdetails", async (req, res) => {
  const { user } = req.session;
  console.log(user);
  if (!user) {
    return res.redirect("denied");
  }
  //  return res.render("userdetails", { user });
});

app.post("/userdetails", (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).send({ message: "Access denied" });
  }
  // Handle POST request logic for the protected route if needed
});

app.get("/denied", (req, res, next) => {
  res.render("denied");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
