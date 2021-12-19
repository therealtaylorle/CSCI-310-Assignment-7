import Posts from './Componets/Posts';
import { useState, useEffect } from 'react';


function App() {

  const [articles, setArticles] = useState([]);
  const [subreddit] = useState('nasa');

  useEffect(() => {
    fetch("https://www.reddit.com/r/"+ subreddit +".json").then(res => {
        if (res.status !== 200) {
            console.log("ERROR");
            return;
        }

        res.json().then(data => {
            if(data != null) {
                console.log(data);
                setArticles(data.data.children);
            }
        });
    })
}, [subreddit])

  return (
    <div className="App">
      <div>
        {(articles != null) ? articles.map((posts, index) => <Posts key={index} posts={posts.data}/>):''}
      </div>
    </div>
  );
}


export default App;
