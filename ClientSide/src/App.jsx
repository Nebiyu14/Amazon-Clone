import "./app.css";
import Routing from "./routing/Routing";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <Routing />
      <ToastContainer theme="dark" autoClose={2000} />
    </>
  );
}

export default App;
