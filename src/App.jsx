import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./containers/HomePage";
import BlogPage from "./containers/BlogPage";
import Menu from "./containers/Menu";
import BlogPostPage from "./containers/BlogPostPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/tortugas" element={<BlogPostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
