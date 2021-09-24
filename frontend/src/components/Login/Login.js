import { React, useState } from "react";
import Button from "../UI/Buttons/Button";
import "./Login.css";

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  //Input storing handlers
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");

  //userReference number
  const [userRno, setUserRno] = useState("");
  //Input state validity
  const [unameValidity, setUnameValidity] = useState(null);
  const [passValidity, setpassValidity] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [adminIdValidity, setAdminIdValidity] = useState(null);
  const [userRnoValidity, setUserRnoValidity] = useState(null);

  //Handler functions
  //Input handlers
  //Admin
  const adminIdInputHandler = (e) => {
    setAdminId(e.target.value);
  };
  //User
  const userRnoInputHandler = (e) => {
    setUserRno(e.target.value);
  };
  const nameInputHandler = (e) => {
    setUname(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };
  //Validity handler
  //Admin
  const adminIdValidityHandler = () => {
    if (adminId.trim() === "") {
      setAdminIdValidity(false);
      setErrorMessage("AdminId not valid!");
    } else {
      setAdminIdValidity(true);
      setErrorMessage("");
    }
  };
  //User
  const userRnoValidityHandler = () => {
    if (userRno.trim() === "") {
      setUserRnoValidity(false);
      setErrorMessage("User Identification number not valid!");
    } else {
      setUserRnoValidity(true);
      setErrorMessage("");
    }
  };
  const nameValidityHandler = () => {
    if (uname.trim() === "" || /\d/.test(uname)) {
      setUnameValidity(false);
      setErrorMessage("Username cannot contain digits or be empty!");
    } else {
      setUnameValidity(true);
      setErrorMessage("");
    }
  };
  const passwordValidityHandler = () => {
    if (password.trim() === "") {
      setpassValidity(false);
      setErrorMessage("Password field cannot be empty!");
    } else {
      setpassValidity(true);
      setErrorMessage("");
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (isAdmin) {
      if (unameValidity && passValidity && adminIdValidity) {
        console.log(uname, password, adminId);
        // fetch("http://localhost:8080/check/getUser",{
        //   method: 'POST',
        //   body: JSON.stringify({
        //     username : uname,
        //     password : password,
        //     adminId : adminId
        //   }),
        //   headers: {
        //     'Content-type':'application/json'
        //   }
        // }).then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err));

        setErrorMessage("");
      } else {
        setErrorMessage("Form not valid yet! Try again!");
      }
    } else if (!isAdmin) {
      if (unameValidity && passValidity && userRnoValidity) {
        console.log(uname, password, userRno);
        setErrorMessage("");
      } else {
        setErrorMessage("Form not valid yet! Try again!");
      }
    }
  };

  return (
    <div>
      <div className="auth-choice-container">
        <h4>I am a / an ,</h4>
        <div>
          <button
            onClick={() => {
              setIsAdmin(true);
              setErrorMessage("");
            }}
          >
            Admin <i class="fas fa-user-lock"></i>
          </button>
          <button
            onClick={() => {
              setIsAdmin(false);
              setErrorMessage("");
            }}
          >
            User <i class="fas fa-user"></i>
          </button>
        </div>
      </div>
      <form onSubmit={formSubmitHandler}>
        <fieldset className="login-fieldset">
          <legend>{isAdmin ? "Admin" : "User"}</legend>
          {!isAdmin ? (
            <div className="userref-container">
              <label
                htmlFor="userref"
                id="user-ref-label"
                onClick={() => {
                  alert("Your unique reference number/Aadhar number:");
                }}
                style={{
                  color: `${userRnoValidity !== false ? "black" : "red"}`,
                }}
              >
                User Reference No:{" "}
              </label>
              <input
                type="text"
                id="userref"
                name="userref"
                onChange={userRnoInputHandler}
                onBlur={userRnoValidityHandler}
                style={{
                  outlineColor: `${
                    userRnoValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
            </div>
          ) : (
            <div className="adminid-container">
              <label
                htmlFor="adminid"
                style={{
                  color: `${adminIdValidity !== false ? "black" : "red"}`,
                }}
              >
                Admin Access ID:
              </label>
              <input
                type="password"
                id="adminid"
                name="adminid"
                onChange={adminIdInputHandler}
                onBlur={adminIdValidityHandler}
                style={{
                  outlineColor: `${
                    userRnoValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
            </div>
          )}
          <div className="username-container">
            <label
              htmlFor="uname"
              style={{ color: `${unameValidity !== false ? "black" : "red"}` }}
            >
              Username:
            </label>
            <input
              type="text"
              id="uname"
              name="uname"
              onChange={nameInputHandler}
              onBlur={nameValidityHandler}
              style={{
                outlineColor: `${unameValidity !== false ? "black" : "salmon"}`,
              }}
            />{" "}
            <br />
          </div>
          <div className="password-container">
            <label
              htmlFor="pass"
              style={{
                color: `${passValidity !== false ? "black" : "red"}`,
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="pass"
              name="pass"
              onChange={passwordInputHandler}
              onBlur={passwordValidityHandler}
              style={{
                outlineColor: `${passValidity !== false ? "black" : "salmon"}`,
              }}
            />{" "}
            <br />
          </div>
          {errorMessage && <p className="error-msg">{errorMessage}</p>}
          <Button className="login">Login</Button>
        </fieldset>
      </form>
    </div>
  );
}
