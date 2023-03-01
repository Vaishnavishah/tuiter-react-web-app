import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];

 return (
 <div>
   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
     <FontAwesomeIcon icon={solid('house-chimney')}  />
         &nbsp; Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
     <FontAwesomeIcon icon={solid('hashtag')}  />
       &nbsp; Explore
     </Link>
     <Link to="/" className="list-group-item">
     <FontAwesomeIcon icon={solid('computer')}  />
           &nbsp; Labs
     </Link>

     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                    <FontAwesomeIcon icon={solid('bell')}  />
                               &nbsp;
       Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                    <FontAwesomeIcon icon={solid('envelope')}  />
                               &nbsp;
       Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                    <FontAwesomeIcon icon={solid('bookmark')}  />
                               &nbsp;
       Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                    <FontAwesomeIcon icon={solid('list')}  />
                               &nbsp;
       Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                    <FontAwesomeIcon icon={solid('user')}  />
                               &nbsp;
       Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                    <FontAwesomeIcon icon={solid('circle')}  />
                               &nbsp;
       More
     </a>
   </div>
   <div className="d-grid mt-2">
        <a href="tweet.html"
           className="btn btn-primary btn-block rounded-pill">
           Tweet
        </a>
   </div>
   </div>

 );
};
export default NavigationSidebar;


