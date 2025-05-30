import InputComponent from './components/InputComponent';
import ListComponent from './components/ListComponent';
import  'bootstrap/dist/css/bootstrap.css';
import { createContext, useEffect, useState } from 'react';


const tsklstcontext = createContext();
function App() {


  const [tsklst,settsklst] = useState([]);
  useEffect(()=>{
    const locallst = JSON.parse(localStorage.getItem("Tasklst"));
    if(locallst){settsklst(locallst)}
  },[]);
  

  return (
    <div className="mt-5 w-100 d-flex flex-column justify-content-center align-items-center">
      <tsklstcontext.Provider value={{tsklst,settsklst}}>
        <InputComponent></InputComponent>
        <hr style={styledivider}/>
        <ListComponent></ListComponent>
      </tsklstcontext.Provider>
      
    </div>
  );
}
const styledivider = { width: "100vw",
  height: "1px",
  backgroundColor: "#333",
  border: "none",
  opacity: "0.8",
  filter: "blur(1px)"

}
export default App;
export {tsklstcontext};
