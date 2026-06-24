import { Outlet } from "react-router-dom";

import { Header } from "./widgets/Header";
import { Footer } from "./widgets/Footer/Footer";
import { ScrollToTop } from "./app/ScrollToTop";


function App() {
  return (
    <>
       <ScrollToTop/>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;