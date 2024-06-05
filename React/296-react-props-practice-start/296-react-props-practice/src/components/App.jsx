import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// function createCard(contact) {
//   return (
//     <Card
//       name = {contact.name}
//       imgURL={contact.imgURL}
//       phone={contact.phone}
//       email={contact.email}
//     />
//   )
// }

function App() {
  const cardElements = contacts.map((contact)=>{
    return <Card 
      key={contact.id}  
      // propKey={contact.id}  
      name = {contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  })

  return (
    
    <div>
      <h1 className="heading">My Contacts</h1>
      {
        cardElements // this is way by variable func


        // contacts.map(createCard)  //this is the way by calling a funnc
      /* <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
