import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./layout/Layout";
import Footer from "./shared/Footer";
import Menubar from "./shared/Menubar";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Menubar />
      <Layout />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
