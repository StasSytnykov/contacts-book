import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { HomeView } from "./views/Home/Home";
import { AddContactView } from "./views/AddContacts/AddContactView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeView />} />
          <Route path="/add" element={<AddContactView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
