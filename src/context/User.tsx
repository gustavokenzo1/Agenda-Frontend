import React, { createContext, useContext, useState } from "react";
import api from "../services/api";

type UserTypes = {
  user: {
    user: {
      _id: string;
      name: string;
      email: string;
      password: string;
    };
  } | null;
  Login: (email: String, password: String) => Promise<void>;
  signed: boolean;
};

const AuthContext = createContext({} as UserTypes);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  async function Login(email: String, password: String) {
    try {
      const user = await api.post("/user/login", {
        email: email,
        password: password,
      });

      setUser(user.data);
      return user.data;
    } catch (error: any) {
      return error;
    }
  }

  return (
    <AuthContext.Provider value={{ Login, user, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
