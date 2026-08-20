import NoteCard from "./NoteCard"

function NoteGrid({notes,setEdit,deleteNote,setIsOpen}){
    const openCreateNote = () => {
        setEdit(null);
        setIsOpen(true);
    };
    return (
       <div class="grid">
 
           {
            notes.length==0?(
                <div
                className="note blank-note"
                onClick={() => setIsOpen(true)}
                style={{ backgroundColor: "#F5F5DC", cursor: "pointer" }}
                >
                <p onClick={openCreateNote} style={{ color: "#aaa", textAlign: "center", marginTop: "auto", marginBottom: "auto" }}>
                    + Click to add a note
                </p>
                </div>  
            ):
            notes.map(note=>
                <NoteCard setEdit={setEdit} deleteNote={deleteNote} {...note}/>
            )
           }
       </div>
    )
}
export default NoteGrid