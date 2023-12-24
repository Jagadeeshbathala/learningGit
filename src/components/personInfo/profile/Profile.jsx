import React, { useState, useEffect} from 'react'

const Profile = (props) => {
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        setUserDetails(props.userDetails)
    })
    
  return (
    <React.Fragment>
        <div className="container">
            <img src={userDetails.avatar_url} alt="" height="150px" width="150px" />
            <p className="h5">{userDetails.name}</p>
            <p>Bio: {userDetails.bio}</p>
        </div>
    </React.Fragment>
  )
}

export default Profile