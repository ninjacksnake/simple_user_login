/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
import crypto from "crypto";
import DbLocal from "db-local";
import User from "../entities/schemas/user.js";
import Encrypt from "../utils/encriptor.js";
import Validation from "../utils/my_validator.js";

// do dependency injection
class UserRepository {
  constructor(db) {
    this.db = db;
  }

  async create({
    username,
    password,
    email,
    nationality,
    age,
    favorites = [],
  }) {
    // validate username and password
    age = parseInt(age);
    console.log(username, password, email, nationality, age);
    new Validation(username).IsNotEmpty().IsString().StringMinimal(4);
    new Validation(password).IsNotEmpty().IsString().StringMinimal(4);
    new Validation(email).IsNotEmpty().IsString();
    new Validation(nationality).IsNotEmpty().IsString().StringMinimal(4);
    new Validation(age).IsNumber().IsNotEmpty();
    const existingUser = await this.db.find(
      (user) => user.username === username
    );
    if (existingUser.length !== 0) {
      throw new Error("Username already exists");
    }
    // hash the password
    password = await Encrypt.hash(password);
    const id = crypto.randomUUID();
    await this.db
      .create({ id, username, password, email, nationality, age, favorites })
      .save();
    return { id, username, email, nationality, age, favorites };
  }

  async login({ username, password }) {
    new Validation(username).IsNotEmpty().IsString();
    new Validation(password).IsNotEmpty().IsString();
    const user = await this.db.find({ username });
    if (user.length === 0) {
      throw new Error("Check Username or Password");
    } else {
      const isPasswordValid = await Encrypt.compare(password, user[0].password); // check if password is good
      if (!isPasswordValid) {
        throw new Error("Check Username or Password");
      }
      const result = {
        _id: user[0]._id,
        username: user[0].username,
        email: user[0].email,
        nationality: user[0].nationality,
        age: user[0].age,
        favorites: user[0].favorites,
      };
      const token = await Encrypt.generateJWTToken(result);
      result.token = token;
      return result;
    }
  }

  async logout(username) {
    new Validation(username).IsNotEmpty().IsString();
    const user = await this.db.find({ username });
    return user;
  }

  async findAll() {
    console.log("finding all users");
    const users = await this.db.find();
    return users;
  }

  async deleteUser(Id) {
    try {
      await this.db.remove({ _id: Id });
    } catch (error) {
      console.log(error);
      throw new Error("Unable to remove this user");
    }
  }
}

export default function userRepository(db = new DbLocal()) {
  return new UserRepository(User);
}
