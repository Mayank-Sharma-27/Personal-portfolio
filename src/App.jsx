import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Blogs } from "./components/Blogs/Blogs";
import { Contact } from "./components/Contact/Contact";
import { BlogPost } from "./components/Blogs/BlogPost";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Blogs />
              <Contact />
            </>
          }
        />
        <Route path="/blogs/:id" element={<BlogPost />} />{" "}
        {/* Dynamic route for individual blog posts */}
      </Routes>
    </div>
  );
}

export default App;
