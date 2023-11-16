import React,{useState} from "react";
import SearchBar from "./Components/SearchBar";
import Display from "./Components/Display";


const App = ()=>{
  const [searchResults,setSearchResults] = useState([])

  return(
    <div>
      <SearchBar setSearchResults={setSearchResults}/>
      <Display searchResults={searchResults}/>
    </div>
  )
}

export default App;
