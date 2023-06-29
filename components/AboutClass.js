import React from "react";
import UserContext from "../utils/userContext";

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
// when class in instantiated first constructer is called , then render is called

// import {Component} from "react"
// class AboutClass extends Component {}
// below calss can be written like this using array destructing

// we cannot use hooks in calss based components , so to use context in class based components
// we need to use defined contexts as <Components> , refer below for details

class AboutClass extends React.Component {
  // to receive props from outside we need to add constructor for this class
  // "this" keyword and "super(props)" are compulsary to use

  constructor(props) {
    super(props);
    // class based componenets is old way , when react built initially class based compon were in use
    // that time hooks were not introduced , so before hooks this is how we used to create state variables
    // mutiple state variables can be defined in this state object
    // behind the scenes react stores state variables like this in case of hooks
    this.state = {
      count1: 0,
      count2: 1,
      userInfo: {},
    };
  }

  async componentDidMount() {
    // I will excute in mounting phase -  1
    // I Will be called only in the first render
    // after that componentDidUpdate() will be called

    let response = await fetch("https://api.github.com/users/shiiijo");
    let json = await response.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // I will excute in updating phase - 2
    // I will excuted when state variable updates after first time
    // it will be called after every update
  }

  componentWillUnmount() {
    // I will excute in un-mounting phase - 3
    // I will be excuted when componenet is unmounted from the page
    // unmount will happen if I go to other page
    // example going from aboutus page to contact page
  }

  render() {
    return (
      <div className="about-card">
        <img src={this.state.userInfo.avatar_url}></img>
        <h4>{this.state.userInfo.name}</h4>
        <h4>{this.state.userInfo.bio}</h4>
        <h4>Email : shrinidhijoshi99@gmail.com</h4>
        <h4>Twitter : {this.state.userInfo.twitter_username}</h4>
        <p>
          count : {this.state.count1} - {this.state.count2}
        </p>
        <button
          onClick={() => {
            // this is given by react , it can be used anywhere inside the class to update state
            // - variables , it will accepts object which will contain updated state variables
            // you can only pass variables need to be updated in this object not all variables defined in state object
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          click me
        </button>
        <UserContext.Consumer>
          {(user) => {
            console.log(user.name);
            <h1>{user.name}</h1>
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default AboutClass;

// class based component life cycle
// componentDidMoun() is a imp function inside the class like render()
// order of execution of a class when class is instantiated
// constructor -> render() - > componentDidMount()

// example : when parent is also class based component and it has child which is also class based component
// order of execution is (or the life cycle)
// parent-constructor -> parent-render() - > child-constructor -> child-render()
// - > child-componentDidMount() -> parent-componentDidMount()
// for multiple children , react batches render() of multiple children [render phase] and then it will
// execute componentDidMount() of the multiple childern by batching again in this order
//-componentDidMount() of first child - > componentDidMount() of second child [commit phase]
// -then componentDidMount() of parent & it is called react batch optimisation , it will make react fatser!!!
// batching reduces number of DOM manipulation (it is very expensive opertaion) , react always tries to reduce
// -number of DOM manipulation & it is achieved by batching
// refer this for detail https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// componentDidMount() is a function is called once components are mounted or rendered on given UI
// it is similar to useEffect() hook but not equivalent.
// both are widely used to make API call

// -- start of update phase and end of mounting phase once componentDidMount() is executed - refer above link for details
// after  componentDidMount() is executed , re-render will happen to populate with actual api data (prevoiusly it had dumy data or shimmer UI)
// then react calls componentDidUpdate() function
// these life cycle methods are not equivalent react hooks

// important - why class based components are not in use
// because of componentDidMount() , componentDidUpdate() ,  componentWillUnmount() these life cycle methods
// it was making react structure complex and also code lines were increasing
// functional based components will eliminate all these problems , it makes structure simple and
// it makes number of lines lesser while coding
