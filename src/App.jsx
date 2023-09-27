import styles from "./App.module.css";

import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero";

import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";

import { Blogs } from "./components/Blogs/Blogs";
import { Contact } from "./components/Contact/Contact";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
