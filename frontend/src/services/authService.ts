// import { api } from "./api";

// export const login = (
//   email: string,
//   password: string
// ) =>
//   api.post("/auth/login", {
//     email,
//     password,
//   });

// export const register = (
//   data: any
// ) =>
//   api.post(
//     "/auth/register",
//     data
//   );

import { api } from "./api";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role?: string;
  createdAt?: string;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

export interface RegisterResponse {
  message: string;
  user: AuthUser;
}

export const registerUser = async (
  data: RegisterData
): Promise<RegisterResponse> => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};

export const loginUser = async (
  data: LoginData
): Promise<LoginResponse> => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};