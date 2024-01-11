import { Container } from "react-bootstrap";

import Headder from "./features/crudoperationlocal/Headder";
import { Route, Routes } from "react-router";
import Updatetask from "./features/crudoperationlocal/Updatetask";




function App() {
  return (
  <Container>
     <Routes>
          <Route path="/" element={<Headder/>} />
          <Route path="/update" element={<Updatetask />} />
        </Routes>

   
  </Container>
  );
}

export default App;
