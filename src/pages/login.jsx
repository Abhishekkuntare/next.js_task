import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import ApiData from "./api_data";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const googleAuth = new GoogleAuthProvider();
  const [user, setUser] = useAuthState(auth);

  const handleLogin = async () => {
    setLoader(true);
    try {
      const res = await signInWithPopup(auth, googleAuth);
      setLoader(false);
    } catch (err) {
      setLoader(false);
      alert(err);
    }
  };
  useEffect(() => {}, [loader, user]);

  return (
    <>
      {/* loader  */}
      {loader ? (
        <h1
          style={{
            fontFamily: "fantasy",
            fontSize: "30px",
            letterSpacing: "14px",
          }}
        >
          Loading......
        </h1>
      ) : (
        <div
          style={{
            fontFamily: "monospace",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {user ? (
            <h1>Welcome ! </h1>
          ) : (
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40vh",
                fontFamily: "monospace",
              }}
            >
              Login With Google Auth
            </h1>
          )}

          {/* google details  */}
          <div>
            <div
              style={{
                marginBottom: "10px",
                fontSize: "20px",
              }}
            >
              {user ? `Name:  ${user.email}` : ""}
            </div>
          </div>
          <div
            style={{
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            {user ? <span>{user.metadata.creationTime}</span> : ""}
          </div>
          <div
            style={{
              marginBottom: "10px",
              fontSize: "20px",
            }}
          >
            {user ? `Email: ${user.displayName}` : ""}
          </div>

          {/* logout button  */}
          {user ? (
            <button
              style={{
                fontSize: "20px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                outline: "none",
                padding: "30px",
                width: "300px",
                height: "40px",
                backgroundColor: "#FF8066",
                color: "white",
                cursor: "pointer",
                marginTop: "30px",
              }}
              onClick={() => auth.signOut()}
            >
              Logout
            </button>
          ) : (
            // login button
            <button
              style={{
                fontSize: "20px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                outline: "none",
                padding: "30px",
                width: "300px",
                height: "40px",
                backgroundColor: "#845EC2",
                color: "white",
                cursor: "pointer",
              }}
              onClick={handleLogin}
            >
              Login{" "}
            </button>
          )}

          {user ? <ApiData /> : ""}
        </div>
      )}
    </>
  );
};

export default Login;
