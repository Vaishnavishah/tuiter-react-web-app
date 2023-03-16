import React from "react";
import {useSelector} from "react-redux";
import PostItem
  from "./post-item";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
const posts = useSelector(state => state.tuits)

   return(
   <>
   <WhatsHappening/>

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
      </>
    );

};
export default HomeComponent;