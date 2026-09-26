import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "stocksense_secret";

export const generateToken = (
  payload: object
) =>
  jwt.sign(
    payload,
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );