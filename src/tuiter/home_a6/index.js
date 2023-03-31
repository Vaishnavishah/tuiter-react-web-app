import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import PostItem
  from "./post-item";
import WhatsHappening from "./whats-happening";
import {findTuitsThunk}
  from "../../services/tuits-thunks";



const HomeComponent = () => {

const {tuits, loading} = useSelector(
  state => state.tuitsData)
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(findTuitsThunk())
 }, [])

   return(
   <>
   <WhatsHappening/>

      <ul className="list-group">
      {
             loading &&
             <li className="list-group-item">
               Loading...
             </li>
           }

        {
          tuits.map(tuits =>
          <li className = "list-group-item">
            <PostItem
              key={tuits._id}
              post={tuits}/></li>
          )
        }
      </ul>
      </>
    );

};
export default HomeComponent;