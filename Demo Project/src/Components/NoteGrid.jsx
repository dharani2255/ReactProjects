import NoteCard from "./NoteCard"

function NoteGrid({notes,setEdit,deleteNote}){
    return (
       <div class="grid">
 
           {
            notes.map(note=>
                <NoteCard setEdit={setEdit} deleteNote={deleteNote} {...note}/>
            )
           }
       </div>
    )
}
export default NoteGrid