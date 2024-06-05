import React from "react";
import Entry from './Entry.jsx';
import emojipedia from '../emojipedia.js';

function App() {

  const emojis = emojipedia.map((emo)=>{
    return (
      <Entry 
      key = {emo.id}
      id= {emo.id}
      emoji= {emo.emoji}
      name= {emo.name}
      meaning= {emo.meaning}
      />
    )
  })

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojis}
      </dl>
    </div>
  );
}

export default App;
