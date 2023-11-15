import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Map } from "./components/Maps";
import Header from "./components/Header";
import LoginOrDisconnect from "./pages/LoginOrDisconnect";
import { StoreProvider } from "./store/Store";
import PartiTelPage from "./pages/PariTelPage";
import ParaplegiquePage from "./pages/ParaplegiquePage";
import ParaplegiqueMap from "./pages/ParaplegiqueMap";
import ParaplegiqueExplanation from "./pages/ParaplegiqueExplanation";

function App() {
  const user = true;

  return (
    <>
      <div className="bg-white">
        <StoreProvider>
          <BrowserRouter>
            <Header />
            <div>
              <Routes>
                {user ? (
                  <>
                    <Route path="/" Component={Map}></Route>
                  </>
                ) : null}
                <Route path="/login" Component={LoginOrDisconnect}></Route>
                <Route path="/paritel" Component={PartiTelPage}></Route>
                <Route
                  path="/paritel/paraplegique"
                  Component={ParaplegiquePage}
                ></Route>
                <Route
                  path="/paritel/paraplegique/map"
                  Component={ParaplegiqueMap}
                ></Route>
                <Route
                  path="/paritel/paraplegique/page"
                  Component={ParaplegiqueExplanation}
                ></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </StoreProvider>
      </div>
    </>
  );
}

export default App;
