import React from "react";
import "components/login/Login.scss";
export default function Login(props) {
  const login = () => { props.setMode("Data") }
  return (
    <div className="loginContainer">
      <div className="login">
        <div className="tofuImageContainer">
          <img className="tofuImage" alt="tofuImage" src="https://media.istockphoto.com/photos/block-and-cubes-of-tofu-picture-id465944034?k=20&m=465944034&s=612x612&w=0&h=OCejoEitg8O0ChNb3Kg40-dpOY4SUO7atNCFKZmpqKQ=" />
        </div>
        <form
          className="login-form"
          method="post"
          action="/login/"
        ></form>
        <h1 className="loginTitle">Into the TOFU DB</h1>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          value="kdn376@gmail.com"
          required
          autofocus
        ></input>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" value="12345"required></input>
        <div class="checkbox mb-3">
        </div>
        <div class="signInButtonContainer">
          <button class="btn btn-lg btn-primary btn-block signInButton" type="submit" onClick={login}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
