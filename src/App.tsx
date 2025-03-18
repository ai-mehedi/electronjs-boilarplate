import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SmtpAdd from "./pages/SmtpAdd";

export default function App() {
  return (
    <div className="flex h-screen">
     
     <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<SmtpAdd />} />
         
        </Routes>
      </div>
    </div>
    </div>
  );
}
