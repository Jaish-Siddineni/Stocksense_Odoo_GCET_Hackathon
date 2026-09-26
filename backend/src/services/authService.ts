import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

const users: any[] = [];

export const register =
  async (
    name: string,
    email: string,
    password: string
  ) => {
    const hashed =
      await bcrypt.hash(
        password,
        10
      );

    const user = {
      id: Date.now().toString(),
      name,
      email,
      password: hashed,
    };

    users.push(user);

    return user;
  };

export const login =
  async (
    email: string,
    password: string
  ) => {
    const user = users.find(
      (u) => u.email === email
    );

    if (!user)
      throw new Error(
        "User not found"
      );

    const valid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!valid)
      throw new Error(
        "Invalid credentials"
      );

    const token =
      jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET ||
          "secret",
        {
          expiresIn: "7d",
        }
      );

    return {
      token,
      user,
    };
  };