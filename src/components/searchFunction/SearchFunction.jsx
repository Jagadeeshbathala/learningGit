import React, { useState } from 'react'
import Profile from '../personInfo/profile/Profile'
import Projects from '../personInfo/projects/Projects'
import axios from 'axios'


const SearchFunction = () => {
    const [gitProfile, setGitProfile] = useState({})
    const [username, setUsetname] = useState("")

    const usernameFunction = (e) => {
        // alert(e.target.value);
        var enteredName = e.target.value
        setUsetname(enteredName)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        let usernameURL = `https://api.github.com/users/${username}`
        axios.get(usernameURL)
        .then((response) => {
            console.log(response.data);
            setGitProfile(response.data)
        })
        .catch(err => {
            console.error(err);
        })
    }

  return (
    <React.Fragment>
        <pre>{JSON.stringify(gitProfile)}</pre>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p className="h4">GitHub Profile</p>
                        <p>
                            This Application is for searching the user in GitHub and display the Profile, Projects and Repository<br/>
                            I used GitHub REST API to fetch the user details and displaying them accordingly
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <form onSubmit={handleSearch} className='form-inline'>
                                <p className="h4">Enter the Username</p>
                                <input type="text" onChange={usernameFunction} />
                                <input type="submit" value="Search" />
                                {/* <button className='btn btn-danger btn-sm' onClick={handleSearch}>Search</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Profile userDetails={gitProfile}/>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <Projects />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default SearchFunction