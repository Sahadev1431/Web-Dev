import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  return (
    <div>
        <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Card 
    name="Beyonce"
    img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    phone = "+123 456 789"
    email="b@beyonce.com"
    />
    <Card 
    name="jack Bauer"
    img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    phone = "+987 654 321"
    email="jack@nowhere.com"
    />
  </div>
)

// ReactDOM.render(
//   <div>
//     <h1>My Contacts</h1>

//     <h2>Beyonce</h2>
//     <img
//       src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//       alt="avatar_img"
//     />
//     <p>+123 456 789</p>
//     <p>b@beyonce.com</p>

//     <h2>Jack Bauer</h2>
//     <img
//       src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//       alt="avatar_img"
//     />
//     <p>+987 654 321</p>
//     <p>jack@nowhere.com</p>

//     <h2>Chuck Norris</h2>
//     <img
//       src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
//       alt="avatar_img"
//     />
//     <p>+918 372 574</p>
//     <p>gmail@chucknorris.com</p>
//   </div>,
//   document.getElementById("root")
// );

// // If you're running this locally in VS Code use the commands:
// // npm install
// // to install the node modules and
// // npm run dev
// // to launch your react project in your browser
