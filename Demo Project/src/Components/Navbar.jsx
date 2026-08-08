import { useState } from "react";
import NoteModel from "./NoteModel";

function Navbar(
    {setIsOpen,setSearch,setSearchType}
){
    const [showSearch,setShowSearch] = useState(false);
    return(
        <nav class="navbar">
            <h1> All Notes</h1>
            <div class="icons">
                {showSearch && (  
                   <div class="search">

                       <select id="searchtype" name="searchtype" onChange={(e)=>setSearchType(e.target.value)}>
                          <option value="title">title</option>
                          <option value="content">content</option>
                       </select>                 
                     <input 
                       type="text"
                       placeholder="Search notes..."
                       autoFocus
                       onChange={(e)=>setSearch(e.target.value)}
                       class="searchbar"
                     />
                   </div>

                )}
                <button onClick={()=>setShowSearch(!showSearch)}>🔍</button>
                <button onClick={()=>setIsOpen(true)}>+</button>
                <button>⭐</button>
                <button>⋯</button>
                
                
            </div>
        </nav>
    )
}
export default Navbar