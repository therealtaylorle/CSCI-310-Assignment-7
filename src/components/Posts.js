import './Posts.css';
import React from 'react';
import { useState, useEffect } from 'react';

function Posts(props) {

    const [setArticles] = useState([]);
    const [subreddit] = useState('nasa');
  
    useEffect(() => {
      fetch("https://www.reddit.com/r/nasa.json").then(res => {
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
        <div className="box2">
            <a href={ "https://reddit.com" + props.posts.permalink } target="_blank">
                <h3>{ props.posts.title }</h3>
            </a>
        </div>
    );
}

export default Posts;
