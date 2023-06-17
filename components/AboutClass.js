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
// when class in instantiated first constructer is called , then render is called

// import {Component} from "react"
// class AboutClass extends Component {}
// below calss can be written like this using array destructing


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
    };
  }

  componentDidMount(){
      
  }

  render() {
    return (
      <div className="about-card">
        <h3>Name : {this.props.name}</h3>
        <h3>Email : shrinidhijoshi99@gmail.com</h3>
        <h3>Twitter : shrinidhijoshi99</h3>
        <p>count : {this.state.count1} - {this.state.count2}</p>
        <button onClick={
          () => {
            // this is given by react , it can be used anywhere inside the class to update state
            // - variables , it will accepts object which will contain updated state variables
            // you can only pass variables need to be updated in this object not all variables defined in state object 
              this.setState({
                count1: this.state.count1 + 1,
                count2: this.state.count2 + 2,
              });
          }
        }>click me</button>
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
// it is similar to useEffect() hook , as it also follows same pattern of life cycle
// both are widely used to make API call
