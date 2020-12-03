import React from 'react';
import '../Dashboard.css';
import UserBar from '../../../components/UserBar/UserBar/UserBar';
import AddPizza from './components/addPizza';
import RemovePizza from './components/removePizza';

class managePizza extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <UserBar />
                <div className="dashboard__managePizza">
                    <AddPizza />
                    <RemovePizza />
                </div>
            </div>
        );
    }
}

export default managePizza;