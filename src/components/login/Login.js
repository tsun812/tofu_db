import React from "react";
export default function Login(props) {
  const login = () => {props.setMode("Data")}
  return (
    <div className="login">
      <img src="https://media.istockphoto.com/photos/block-and-cubes-of-tofu-picture-id465944034?k=20&m=465944034&s=612x612&w=0&h=OCejoEitg8O0ChNb3Kg40-dpOY4SUO7atNCFKZmpqKQ="
   width="200" height="180"/>
      <form
        className="login-form"
        method="post"
        action="/login/"
      ></form>
      <h1 className="h3 mb-3 font-weight-normal">Into the TOFU DB</h1>
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
