import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { FirstName, LastName, Email, Password } = this.state;

    axios
      .post(
        "http://localhost:5000/register",
        {
          FirstName,
          LastName,
          Email,
          Password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
          this.props.setUserAuth(true)
          this.props.history.push("/searchBook");
        }
      })
      .catch((error) => {
        console.log("registration error", error);
        this.props.setUserAuth(false)
      });
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="FirstName"
            placeholder="FirstName"
            value={this.state.FirstName}
            onChange={this.handleChange}
            required
          />

          <input
            type="text"
            name="LastName"
            placeholder="LastName"
            value={this.state.LastName}
            onChange={this.handleChange}
            required
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={this.state.Email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={this.state.Password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
          <Link to="/auth/login"> login now</Link>
        </form>
      </div>
    );
  }
}
export default withRouter(Registration);
