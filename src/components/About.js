import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
import pics from "../components/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"

// class About extends Component {
//   constructor(props) {
//     super(props);

//   }

//   componentDidMount() {
//   }

//   render() {

//     return (
//       <div>
//         <h1>About Me</h1>
//         <div>
//           LoggedIn User
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="text-xl font-bold">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>
//         <h2>this is first react project </h2>
//         <UserClass name={"Suraj Khonde"} location={"Hyderabad"} />
//       </div>
//     );
//   }
// }

// export default About;
import React from 'react';
import React from 'react';

const AboutUs = () => {
  const contributors = [
    { name: 'Suraj Khonde', email: 'surajrkhonde@gmail.com' },
    { name: 'Akshay Sani', email: 'AkshaySani@namasteReact.com' },
    // Add more contributors as needed
  ];

  return (
    <div className="container mx-auto mt-1 p-8 bg-gray-200 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <div className="flex flex-col items-center">
        <img
          className="rounded-full h-32 w-32 mb-6 border-4 border-pink-500"
          src={ pics}  // Replace with your image URL
          alt="Team"
        />
        <p className="text-lg text-center mb-6">
          Welcome to our team's About Us page! We are a group of passionate individuals dedicated to creating amazing things.
        </p>

        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>

        <ul className="list-disc list-inside mb-6 text-center">
          {contributors.map((contributor, index) => (
            <li key={index} className="mb-2">
              <strong>{contributor.name}</strong>: {contributor.email}
            </li>
          ))}
        </ul>

        <p className="text-lg mb-6 text-center">
          We appreciate your support and look forward to bringing you more exciting projects in the future.
        </p>

        <div className="bg-emerald-400 text-pink-600 p-4 rounded-md mb-6 text-center">
          <p className="text-lg">
            For inquiries, please contact us at <a href="mailto:surajrkhonde@gmail.com" className="underline"><span className="text-black font-bold">surajrkhonde@.gmail.com</span></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;