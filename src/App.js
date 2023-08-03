import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchInfo } from "./store/ttn/ttn-operation";


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{

dispatch(fetchInfo())

  },[dispatch])
  return <h1>start</h1>;
}

export default App;
