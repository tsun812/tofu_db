import React from "react";
import useApplicationData from "hooks/useApplicationData";
export default function Login(props) {
  const login = () => {props.setMode("Data")}
  return (
    <div className="login">
      <form
        className="login-form"
        method="post"
        action="/login/"
      ></form>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      ></input>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
      <div class="checkbox mb-3">
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={login}>Sign in</button>
    </div>
  );
}
