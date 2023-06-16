import React from "react";

// it is functional based componant
// export const About = () => {
//   return (
//     <div className="about-card">
//       <h3>Name : Shrinidhi Joshi</h3>
//       <h3>Email : shrinidhijoshi99@gmail.com</h3>
//       <h3>Twitter : shrinidhijoshi99</h3>
//     </div>
//   );
// };

//same thing is implemented using class based-component
// Coomponent is the react class from which our is inheriting all the properties
// we are using Coomponent class from react package like this React.Component
class AboutClass extends React.Component {
  // to receive props from outside we need to add constructor for this class
  // "this" keyword and "super(props)" are compulsary to use 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-card">
        <h3>Name : {this.props.name}</h3>
        <h3>Email : shrinidhijoshi99@gmail.com</h3>
        <h3>Twitter : shrinidhijoshi99</h3>
      </div>
    );
  }
}

export default AboutClass;
