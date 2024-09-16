"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";
import { useRouter } from "next/navigation";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/auth", {
        email: email,
        password: password,
      });

      const { user, access_token } = response.data;

      localStorage.setItem("@meetbot:user", JSON.stringify(user));
      localStorage.setItem("@meetbot:token", JSON.stringify(access_token));

      api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      setData({ user, access_token });
      router.push("/new");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@meetbot:token");
    localStorage.removeItem("@meetbot:user");

    setData({});
    api.defaults.headers.common["Authorization"] = "";
  }

  useEffect(() => {
    const token = localStorage.getItem("@meetbot:token");
    const user = localStorage.getItem("@meetbot:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        token
      )}`;

      setData({
        user: JSON.parse(user),
        access_token: JSON.parse(token),
      });
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
