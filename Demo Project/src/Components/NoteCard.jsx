import NoteOptions from "./NoteOptions"

function NoteCard( {id,title,content,date,color,setEdit,deleteNote}){
    return (
        
        <div
            className="note"
            style={{backgroundColor:color}}
        >

            <h3>{title}</h3>

            <p>{content}</p>

            <small>{date}</small>
            <NoteOptions setEdit = {setEdit} deleteNote={deleteNote} noteId={id}/>
            

        </div>

    )


}
export default NoteCard