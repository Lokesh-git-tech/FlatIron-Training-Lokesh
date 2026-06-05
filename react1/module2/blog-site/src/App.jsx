import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

import blog from "./blog";

function App() {
  return (
    <div>
      <Header name={blog.name} />

      <About
        image={blog.image}
        about={blog.about}
      />

      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;