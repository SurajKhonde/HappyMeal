function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n=globalThis.parcelRequirec9a9,s=n.register;s("h0EEC",function(t,s){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),e(t.exports,"default",()=>l);var r=n("ayMG0");n("c4L89");var o=n("j6ssx"),a=n("acw62"),c=n("gxbk0");class i extends a.Component{constructor(e){super(e)}componentDidMount(){}render(){return/*#__PURE__*/(0,r.jsxs)("div",{children:[/*#__PURE__*/(0,r.jsx)("h1",{children:"About Me"}),/*#__PURE__*/(0,r.jsxs)("div",{children:["LoggedIn User",/*#__PURE__*/(0,r.jsx)(c.default.Consumer,{children:({loggedInUser:e})=>/*#__PURE__*/(0,r.jsx)("h1",{className:"text-xl font-bold",children:e})})]}),/*#__PURE__*/(0,r.jsx)("h2",{children:"this is first react project "}),/*#__PURE__*/(0,r.jsx)(o.default,{name:"Suraj Khonde",location:"Hyderabad"})]})}}var l=i}),s("c4L89",function(e,t){n("ayMG0"),n("acw62")}),s("j6ssx",function(s,r){e(s.exports,"default",()=>i);var o=n("ayMG0"),a=n("acw62");class c extends /*@__PURE__*/t(a).Component{constructor(e){super(e),this.state={userInfo:{name:"Dummy",location:"Default"}};//console.log(this.props.name + "Child Constructor");
}async componentDidMount(){//console.log(this.props.name + "Child Component Did Mount");
// Api call
let e=await fetch("https://api.github.com/users/SurajKhonde"),t=await e.json();this.setState({userInfo:t});//console.log(json);
}componentDidUpdate(){//console.log("Component Did Update");
}componentWillUnmount(){//console.log("Component Will Unmount");
}render(){console.log(this.props.name+"Child Render");let{name:e,location:t,avatar_url:n}=this.state.userInfo;return/*#__PURE__*/(0,o.jsxs)("div",{className:"user-card",children:[/*#__PURE__*/(0,o.jsx)("img",{src:n}),/*#__PURE__*/(0,o.jsxs)("h2",{children:["Name: ",e]}),/*#__PURE__*/(0,o.jsxs)("h3",{children:["Location: ",t]}),/*#__PURE__*/(0,o.jsx)("h4",{children:"Contact:surajrkhonde@gmail.com"})]})}}var i/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */=c});//# sourceMappingURL=About.37adfd77.js.map

//# sourceMappingURL=About.37adfd77.js.map
