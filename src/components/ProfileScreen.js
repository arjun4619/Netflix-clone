import React  from 'react';
import './ProfileScreen.css';
import Nav from './Navbar';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';

function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__contents'> 
                    <img src='https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png' />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                        <h3>Plans (Current Plan: Premium)</h3>
                        <div className='various__plans'>
                            <h4 className='renewalDate'>Renewal Date: 06/04/22</h4>
                            <div className='plan'>
                                <h5>Premium <br/> 4k+ HDR</h5>
                                <button className='subscribed'>Current Package</button>
                            </div>
                            <div className='plan'>
                                <h5>Standard <br/> 1080p</h5>  
                                <button>Subscribe</button>
                            </div>
                            <div className='plan'>
                                <h5>Basic <br/> 480p</h5>
                                <button>Subscribe</button>
                            </div>
                        </div>
                        <button className='signout' onClick={() => auth.signOut() } >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;