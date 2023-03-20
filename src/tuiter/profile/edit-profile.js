import React, {useState} from "react";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {editProfile} from "./profile-reducer";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./index.css";

const EditProfileComponent = ({editComplete}) => {
const profile = useSelector(state => state.profile)
const navigate = useNavigate();
let [firstNameEdit, setFirstName] = useState(profile.firstName);
let [lastNameEdit, setLastName] = useState(profile.lastName);
let [bioEdit, setBio] = useState(profile.bio);
let [locationEdit, setLocation] = useState(profile.location);
let [dobEdit, setDob] = useState(profile.dateOfBirth);


const dispatch = useDispatch();

 const editClickHandler = () => {
   const newProfile = {
        firstName: firstNameEdit,
        lastName: lastNameEdit,
        bio: bioEdit,
        location: locationEdit,
        dateOfBirth: dobEdit
      }

      dispatch(editProfile(newProfile));
      editComplete();

 };
   return(
   <>
       <ul className="list-group">
           <li className="list-group-item">
                <div className="row">
                       <div className="ml-2 col-2 position-relative">
                         <FontAwesomeIcon icon={solid('xmark')} style={{height: '30px', width: '30px'}} onClick={() => editComplete()} />
                       </div>
                       <div className="col-8 position-relative" >
                            <h5 className = "fw-bold" style = {{marginBottom: '0px'}}>

                                       Edit Profile
                            </h5>

                       </div>
                       <div className="col-2" >
                            <button className="btn btn-primary btn-block rounded-pill" onClick={editClickHandler}>
                                Save</button>
                       </div>
                </div>
                <div class="mt-3 user_profile_cap">
                      <div>
                        <img class="user_profile_cover" src={`/images/${profile.bannerPicture}`} alt="img"/>
                      </div>

                      <div class="user_profile_headline">
                          <img class="circleImg" src={`/images/${profile.profilePicture}`} alt="img"/>
                      </div>
                </div>
                <div>
                    <div className="mt-3 form-floating">
                        <input
                          type="text"
                          className="form-control bg-light text-dark"
                          id="wd-edit-profile-first-name"
                          value={firstNameEdit}
                          onChange={(event) => setFirstName(event.target.value)}
                        />
                        <label htmlFor="wd-edit-profile-first-name ">First Name</label>
                    </div>
                    <div className="mt-3 form-floating">
                        <input
                          type="text"
                          className="form-control bg-light text-dark"
                          id="wd-edit-profile-last-name"
                          value={lastNameEdit}
                          onChange={(event) => setLastName(event.target.value)}
                        />
                        <label htmlFor="wd-edit-profile-last-name">Last Name</label>
                    </div>
                    <div className="mt-3 form-floating">
                        <textarea
                          className="form-control bg-light text-dark"
                          id="wd-edit-profile-bio"
                          value={bioEdit}
                          onChange={(event) => setBio(event.target.value)}
                        />
                        <label htmlFor="wd-edit-profile-bio">Bio</label>
                    </div>
                    <div className="mt-3 form-floating">
                        <textarea
                          className="form-control bg-light text-dark"
                          id="wd-edit-profile-location"
                          value={locationEdit}
                          onChange={(event) => setLocation(event.target.value)}
                        />
                        <label htmlFor="wd-edit-profile-location">Location</label>
                    </div>
                    <div className="mt-3 form-floating">
                        <textarea
                          className="form-control bg-light text-dark"
                          id="wd-edit-profile-dob"
                          value={dobEdit}
                          onChange={(event) => setDob(event.target.value)}
                        />
                        <label htmlFor="wd-edit-profile-dob">Birthdate</label>
                    </div>
                </div>
           </li>
       </ul>
    </>

    );

};
export default EditProfileComponent;