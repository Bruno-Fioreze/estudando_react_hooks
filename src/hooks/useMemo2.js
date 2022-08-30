import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  console.log('Pai renderizou');

  //ComponentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);
  return (
    <div className="App">
      {posts.length > 0 &&
        posts.map((post, key) => {
          return (
            <div key={key} className="post">
              <h1> {post.title}</h1>
              <p> {post.body} </p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
