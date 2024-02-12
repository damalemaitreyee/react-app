import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Food ordering App</h2>
        <UserClass name={"Maitreyee(class)"}></UserClass>
      </div>
    );
  }
}
export default About;
