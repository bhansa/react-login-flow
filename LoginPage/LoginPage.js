import React from "react";

const db = {
  username: "admin",
  password: "admin"
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.validateLogin = function(username, password) {
      if (username === db.username && password === db.password) {
        console.log("log in successful");
      } else {
        console.log("username or password is incorrect");
      }
    };

    this.updateUsername = function() {
      this.setState({
        username: document.getElementById("username")
      });
    };
    this.updatePassword = function() {
      this.setState({
        password: document.getElementById("password")
      });
    };
  }

  render() {
    return (
      <form>
        <br />
        <label htmlFor="username">Username</label>
        <input
          type="username"
          name="username"
          id="username"
          onChange={this.updateUsername()}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button
          type="button"
          value="Submit"
          onClick={() =>
            this.validateLogin(this.state.username, this.state.password)
          }
        >
          Submit
        </button>
      </form>
    );
  }
}

export { LoginPage };
