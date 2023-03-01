import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const PostSummaryItem = (
 {
   post = {
     "userImage": "elon-musk.jpg",
     "userName": "Elon Musk",
     "userTag": "elonmusk",
     "time": "23h",
     "postText": "Amazing show about @inspiration4x mission!",
     "cardImage": "post.jpg",
     "cardTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
     "cardText": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
     "cardLink": "netflix.com",
     "comments": "4.2K",
     "retuits": "3.5K",
     "likes": "37.5K",
     "repost": "Elon Musk"
   }
 }
) => {
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
                             <span className="text-muted"> @{post.userTag} &middot; {post.time} </span>
                             <span className="float-end"> <FontAwesomeIcon icon={solid('ellipsis')}  /> </span>
                         </div>
                         <div className="pt-1">
                             <span> {post.postText} </span>
                         </div>
                         <div className="pt-3 pb-3">
                             <div className="rounded-4 border">
                                 <div>
                                     <img src={`/images/${post.cardImage}`} className="card-img-top rounded-4" />
                                 </div>

                                 { post.cardTitle && <div className="border-top ps-2 pt-2 pb-2 pe-2">
                                      <div className="pt-1 fw-bold"> {post.cardTitle} </div>
                                      <div className="text-muted"> {post.cardText} </div>
                                      <a href={post.cardLink} className="text-decoration-none text-muted">
                                              <FontAwesomeIcon icon={solid('link')}  /> {post.cardLink}
                                      </a>
                                   </div>
                                 }
                             </div>
                         </div>
                         <div className="row pb-3 ps-2 text-muted">
                             <div className="col">
                                   <FontAwesomeIcon icon={solid('comment')}  />

                                   <span className="text-muted ps-2">{post.comments}</span>
                             </div>
                             <div className="col">
                                   <FontAwesomeIcon icon={solid('retweet')}  />
                                   <span className="text-muted ps-2">{post.retuits}</span>
                             </div>
                             <div className="col">
                                   <FontAwesomeIcon icon={solid('heart')}  />
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