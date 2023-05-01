import { Route, Routes } from "react-router-dom";
import AddUser from "./features/AddUser";
import EditUser from "./features/EditUser";
import UserList from "./features/UserList";
import './App.css'

function App() {
  return (

    <div className="main-container">
      <h1>Address List</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;