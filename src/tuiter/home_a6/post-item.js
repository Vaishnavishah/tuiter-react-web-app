import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {useDispatch, useSelector}
  from "react-redux";

import {useState} from "react";
import {like, deleteTuit}
  from "../tuits/home-tuit-reducer";

const PostSummaryItem = (
 {
   post = {
              "_id": 234,
              "topic": "Space",
              "userImage": "spacex.jpg",
              "userName": "SpaceX",
              "time": "2h",
              "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
              "image": "post.png",
              "liked": true,
              "replies": 123,
              "retuits": 432,
              "likes": 2345,
              "handle": "@spacex",
              "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
            }
 }
) => {
const dispatch = useDispatch();
const liketuit = (tuit) => {
    dispatch(like(tuit))
  }

const deleteTuitHandler = (id) => {
dispatch(deleteTuit(id));
}

 return(
 <>
 {
                     post.repost && <div className = "text-muted ms-5"><FontAwesomeIcon icon={solid('arrows-rotate')}  /> {post.repost} Retweeted
                      </div>
                 }
 <div className="container d-flex mt-2">


                 <div className="col-1 pt-1">
                        <img src={`/images/${post.userImage}`}
                         className="rounded-circle wd-profile-img"/>
                 </div>
                 <div className="col-11 ms-2 me-2">
                         <div>
                             <span className="fw-bold">
                                 {post.userName}
                                 <FontAwesomeIcon icon={solid('circle-check')}  />
                             </span>
                             <span className="text-muted"> @{post.handle} &middot; {post.time} </span>
                             <span className="float-end"> <FontAwesomeIcon icon={solid('xmark')} onClick={() => deleteTuitHandler(post._id)} /> </span>
                         </div>
                         <div className="pt-1">
                             <span> {post.tuit} </span>
                         </div>

                         <div className="row pb-3 ps-2 text-muted">
                             <div className="col">
                                   <FontAwesomeIcon icon={solid('comment')}  />

                                   <span className="text-muted ps-2">{post.replies}</span>
                             </div>
                             <div className="col">
                                   <FontAwesomeIcon icon={solid('retweet')}  />
                                   <span className="text-muted ps-2">{post.retuits}</span>
                             </div>
                             <div className="col">

                                   {post.liked && <FontAwesomeIcon icon={solid('heart')} style={{color: 'red'}} onClick={() => liketuit(post)}/>}
                                   {!post.liked && <FontAwesomeIcon icon={solid('heart')} onClick={() => liketuit(post)}/>}
                                   <span className="text-muted ps-2">{post.likes}</span>
                             </div>
                             <div className="col">
                                    <FontAwesomeIcon icon={solid('arrow-up-from-bracket')}  />

                             </div>
                         </div>
                 </div>
         </div>
         </>

 );
 };
 export default PostSummaryItem;