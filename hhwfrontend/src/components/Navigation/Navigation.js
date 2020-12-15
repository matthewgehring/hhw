import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
    if(isSignedIn){
        return(
            <li onClick={() => onRouteChange('signin')} className='f4 dim white pv2 ph3 pointer'>Sign Out</li>
        );
    } else {
        return(
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>

            </nav>
        );
    }
}

export default Navigation;