import React from 'react';
import './ ProfileAvatar.css';

const ProfileAvatar = () => {
	return(
		<section className="profile-avatar"> 
      <div className="profile-avatar__imgframe">
        <img src="./images/rsz_avatar3.jpg" alt="vsdvrgwr" className="fanci-avatar fanci-avatar__large" />
        <i className="material-icons">camera_alt</i>
      </div>
      
      <h3>User Name</h3>
      <h4>
        <i className="material-icons">location_on</i> 
        <span>357 avenue des moulineaux</span>
      </h4>
    </section>
	);
}

export default ProfileAvatar;