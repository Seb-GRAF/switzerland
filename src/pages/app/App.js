import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "../nav/nav";
import Cities from "../cities/cities";
import Geneva from "../geneva/geneva";
import Zurich from "../zurich/zurich";
import Intro from "../intro/intro";
import "./style.scss";
import { AnimatePresence } from "framer-motion";

const App = () => {
  // const [preloader, setPreloader] = useState(true);
  // const [timer, setTimer] = useState(0);
  // const id = useRef(null);

  // const clear = () => {
  //   window.clearInterval(id.current);
  //   setPreloader(false);
  // };
  // useEffect(() => {
  //   id.current = window.setInterval(() => {
  //     setTimer((timer) => timer - 1);
  //   }, 1000);
  // }, []);
  // useEffect(() => {
  //   if (timer === 0) {
  //     clear();
  //   }
  // }, [timer]);

  const location = useLocation();
  return (
    <div className="app" id="app" data-scroll-container>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Intro />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/geneva" element={<Geneva />} />
          <Route path="/zurich" element={<Zurich />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
