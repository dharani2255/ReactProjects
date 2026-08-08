import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NoteGrid from "./Components/NoteGrid";
import NoteModel from "./Components/NoteModel";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [edit,setEdit] = useState(null);
  const [search,setSearch] = useState("");
  const [serachType,setSearchType] = useState("title");
  const noteColors = [
    "#E8F7A6", // Light Lime
    "#DDEBF1", // Light Blue
    "#FFD97A", // Soft Yellow
    "#00A8B5", // Teal
    "#B7DCD2", // Mint Green
    "#E8E8E8", // Light Gray
    "#B9DED8", // Sea Green
    "#2F80FF", // Bright Blue
    "#D8C4FF", // Lavender
    "#FFA726", // Orange
    "#F8A8B8", // Soft Pink
    "#CBE5F2", // Sky Blue
    "#C8E6C9", // Light Green
    "#FFE0B2", // Peach
    "#F3E5F5", // Light Purple
    "#FFF9C4", // Pale Yellow
    "#B3E5FC", // Baby Blue
    "#D7CCC8", // Light Brown
    "#F5F5DC", // Beige
    "#CFD8DC", // Blue Gray
  ];  
  const addNote = (title,content)=>{
    const color = noteColors[Math.floor(Math.random() * noteColors.length)]; 
    const newNote = {
      id:Date.now(),
      date: new Date().toLocaleDateString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true, day: "2-digit", month: "short", year: "numeric" }),
      title,
      content,
      color
    };
    const updatedNotes = [...notes, newNote];  
    setNotes(updatedNotes);                     
    localStorage.setItem("notes",JSON.stringify(updatedNotes))
  }

  const editNote = (id,title,content) => {
    const updatedNotes = notes.map(note => 
     note.id===id ? {...note,title,content} : note );
     setNotes(updatedNotes);
     localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  const deleteNote =(id)=>{
    const updatedNotes = notes.filter(note=>note.id!=id)
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  const searchNotes = notes.filter(note=>
    serachType === "title" 
    ? note.title.toLowerCase().includes(search.toLowerCase()) 
    : note.content.toLowerCase().includes(search.toLowerCase())  
  )

 const noteToEdit = notes.find(n => n.id === edit);

    return (
        <>    
           <Navbar setIsOpen = {setIsOpen} setSearch = {setSearch} setSearchType={setSearchType}/>
           <NoteGrid notes={searchNotes} setEdit = {setEdit} deleteNote = {deleteNote} setSearch = {setSearch}/>
           {[
                isOpen && (
               <NoteModel onClose={() => setIsOpen(false)}
               onSave={addNote} />
                ),
                edit && noteToEdit && (
                <NoteModel 
                  key="edit"
                  initialTitle = {noteToEdit.title}
                  initialContent = {noteToEdit.content}
                  onClose={() => setEdit(false)}
                  onSave={(title, content) =>{
                    editNote(edit,title,content);
                    setEdit(null); 
                  }}/>
                  
              )
           ]}

           
        </>
    );
}

export default App;