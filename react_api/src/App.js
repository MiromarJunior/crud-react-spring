import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientesAdd from "./components/ClientesAdd";
import ClientesList from "./components/ClientesList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
        <Routes>
          <Route path="/" element={<ClientesList />} />
          <Route path="/clientes/edit/:id" element={< ClientesAdd/>} />
          <Route path="/add" element={<ClientesAdd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>


        </div>
        
      </div>
    </BrowserRouter>
  );
}
export default App;
