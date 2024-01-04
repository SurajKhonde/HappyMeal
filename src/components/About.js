import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <h1>About Me</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>this is first react project </h2>
        <UserClass name={"Suraj Khonde"} location={"Hyderabad"} />
      </div>
    );
  }
}

export default About;
