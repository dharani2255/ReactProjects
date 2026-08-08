import { useState } from "react";
import NoteModel from "./NoteModel";

function NoteOptions({setEdit,noteId,deleteNote}){
    // const [edit,setEdit] = useState(false);
    const [options,setOptions] = useState(false);
     return (
     <>
      <div className="more" onClick={()=>setOptions(!options)} >...</div>
    {[
        options && (
        <div className="noteoptions">
        <div onClick={()=>{
            setEdit(noteId);
            setOptions(false);
            }}>Edit</div>
         <div onClick={() => {
           deleteNote(noteId);
           setOptions(false);
            }}>Delete</div>
        </div>
        ),
       
    ]}
     </>
        
     )
}
export default NoteOptions