import React, {useState} from "react";
import EditProfileComponent from "./edit-profile";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./index.css";


const ProfileComponent = () => {
const profile = useSelector(state => state.profile)

const navigate = useNavigate();

const [isEditing, setEditing] = useState(false);

   return(
   <>
   {isEditing ? <EditProfileComponent editComplete={() => setEditing(false)}/>
   :

   <ul className="list-group">
    <li className="list-group-item">
    <div className="row">
       <div className="ml-2 col-2 position-relative">
         <FontAwesomeIcon icon={solid('arrow-left')} style={{height: '30px', width: '30px'}} onClick={() => navigate(-1)} />
       </div>
       <div className="col-10 position-relative" >
            <h5 className = "fw-bold" style = {{marginBottom: '0px'}}>

                       {profile.firstName} {profile.lastName}
            </h5>
            <div className = " text-muted"> {profile.numberOfTuits} Tuits</div>
       </div>
    </div>
    <div class="user_profile_cap">

          <div>
            <img class="user_profile_cover" src={`/images/${profile.bannerPicture}`} alt="img"/>
          </div>

          <div class="user_profile_headline">
              <img class="circleImg" src={`/images/${profile.profilePicture}`} alt="img"/>

              <div>
                <button onClick={() => setEditing(true)} class="capsule">
                  Edit profile
                </button>
              </div>
          </div>
    </div>
    <div>
        <h5 className = "fw-bold" style = {{marginBottom: '0px'}}>
             {profile.firstName} {profile.lastName}
        </h5>
        <div className = " text-muted"> {profile.handle}</div>

    </div>
    <div className = "mt-2 ">
        {profile.bio}
    </div>
    <div className="row pb-3 ps-2 text-muted">
         <div className="col">
               <FontAwesomeIcon icon={solid('location-dot')}  />

               <span className="text-muted ps-2">{profile.location}</span>
         </div>
         <div className="col">
               <FontAwesomeIcon icon={solid('cake-candles')}  />
               <span className="text-muted ps-2">Born {profile.dateOfBirth}</span>
         </div>
         <div className="col">
                <FontAwesomeIcon icon={solid('calendar-days')}  />
                <span className="text-muted ps-2">Joined {profile.dateJoined}</span>
         </div>
    </div>
    <div>
        <b>340</b>
        <span className = "text-muted"> Following </span>

        <b style = {{paddingLeft : "15px"}}> 223</b>
        <span className = "text-muted"> Followers </span>
    </div>
    </li>
    </ul>
    }
    </>

    );

};
export default ProfileComponent;