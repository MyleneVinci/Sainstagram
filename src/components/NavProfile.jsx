import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
import User from '../components/User'
import './NavProfile.css';
import refresh2 from '../assets/refresh2.png';
import users from '../assets/users'

const NavProfile = () => {
    const [trigger, setTrigger] = useState();

        //nacapi shut down looking for a solution to replace it


    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const url = "https://a.nacapi.com/sainstgram.users";
    //     Axios
    //         .get(url)
    //         .then((response) => setUsers(response.data))
    //         .catch(error => console.log(`API call error: ${error}`))
    // }, []);

    const randomProfile = [];
    function getRandomUsers() {
        if (users.length) {
            for (let i = 0; randomProfile.length < 5; i++) {
                const j = Math.floor(Math.random() * users.length);
                if (!randomProfile.includes(users[j]) && users[j].id !== 6) {
                    randomProfile.push(users[j])
                };
            }
        }
    }
    getRandomUsers();

    return (
        <div className="NavProfile" >
            {randomProfile.map((user) => 
            <Link className="user-container" to={`/profil/${user.id}`}>
                <User {...user} key={user.id} />
            </Link>)}
            <img onClick={ ()=>{setTrigger({})}} className='nav-refresh-button' src={refresh2} alt="New profiles" />
        </div>
    )        
}

export default NavProfile;
