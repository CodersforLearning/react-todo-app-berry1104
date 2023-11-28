import React from "react";


//<div className="note">
//        <h1>This is the title</h1>
//        <p>This is the content</p>
//</div>

function Note(props) {
  
  return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  );
}


export default Note;