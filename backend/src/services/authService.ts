import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../config/db";

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Hash password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user in MySQL through Prisma
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "WAREHOUSE_STAFF", // Default role
    },
  });

  // Never return the password
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
};

export const login = async (
  email: string,
  password: string
) => {
  // Find user in MySQL
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Compare entered password with hashed password
  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    throw new Error("Invalid credentials");
  }

  // Create JWT
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET || "",
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};