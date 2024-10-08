import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyJournal from "./pages/MyJournal/MyJournal";
import MyProfile from "./pages/MyProfile/MyProfile";
import PageNotFound from "./pages/404";
import JournalContextProvider from "./contexts/JournalContext";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <JournalContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="journal" element={<MyJournal />} />
              <Route path="profile" element={<MyProfile />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} replace />
          </Routes>
        </JournalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
