import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';


export const UserBarTopItems = [
    {
        title: 'My Details',
        path: '/mydetails',
        cName: 'my-details',
        icon: faAddressCard,
        id: 'my-details'
    },
    {
        title: 'Change Password',
        path: '/change-password',
        cName: 'password',
        icon: faUnlockAlt,
        id: 'password'
    },
    {
        title: 'Order History',
        path: '/order-history',
        cName: 'history',
        icon: faHistory,
        id: 'history'
    },
    {
        title: 'Update Menu',
        path: '/manage-pizza',
        cName: 'updateMenu',
        icon: faMoneyCheck,
        id: 'updateMenu'
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