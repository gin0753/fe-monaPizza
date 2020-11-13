import React from 'react';
import './manageAccount.css';
import UserProfile from './components/userProfile';

class Media extends React.Component{

    render(){
        return <div className="manageAccount">
                    <UserProfile />
               </div>   
    }
}

export default Media;