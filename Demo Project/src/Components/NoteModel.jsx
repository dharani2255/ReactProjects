import { useState } from "react";

function NoteModel({onClose , onSave,
    initialTitle="",
    initialContent=""
}
){
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const saveNote = () =>{
        onSave(title,content);
        onClose();
    }
   return(
    <div className="overlay">     
    <h1>Create Note</h1>
        <div className="modal">
          
        <input type="text" value = {title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)}/>          
        <textarea value={content}placeholder="Write your note..." onChange={(e) => setContent(e.target.value)}/>      
        <button className="save-btn" onClick={saveNote}>Save</button>
        <button className="close-btn" onClick={onClose}> X </button> 
            
            
        </div>
    </div>
   );
}
export default NoteModel