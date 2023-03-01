import React from "react";
import posts from './posts.json';
import PostItem
  from "./post-item";

const HomeComponent = () => {

   return(
      <ul className="list-group">
        {
          posts.map(post =>
          <li className = "list-group-item">
            <PostItem
              key={post._id}
              post={post}/></li>
          )
        }
      </ul>
    );

};
export default HomeComponent;