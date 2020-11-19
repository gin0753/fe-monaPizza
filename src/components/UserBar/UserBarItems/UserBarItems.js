import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';


export const UserBarTopItems = [
    {
        title: 'My Details',
        path: '#my-details',
        cName: 'my-details',
        icon: faAddressCard,
        id: 'my-details'
    },
    {
        title: 'Payment Details',
        path: '#payment',
        cName: 'payment',
        icon: faMoneyCheck,
        id: 'payment'
    },
    {
        title: 'Change Password',
        path: '#password',
        cName: 'password',
        icon: faUnlockAlt,
        id: 'password'
    },
    {
        title: 'Order History',
        path: '#history',
        cName: 'history',
        icon: faHistory,
        id: 'history'
    }
];

export const UserBarMiddleItems = [
    {
        title: 'Order Now',
        path: '/shopping-cart',
        cName: 'nav-text'
    }
];

export const UserBarBottomItems = [
    {
        title: 'Logout',
        path: '#logout',
        cName: 'logout',
        id: 'logout'
    }
];