import React from "react";

class LoginPage extends React.Component {
  Login() {
    console.log("login called");
  }

  render() {
    return (
      <form>
        <label for="username">Username</label>
        <input type="username" name="username" />
        <br />
        <label for="password">Password</label>
        <input type="password" name="password" />

        <button type="button" onClick={this.Login()} value="Submit">
          Submit
        </button>
      </form>
    );
  }
}

export { LoginPage };
