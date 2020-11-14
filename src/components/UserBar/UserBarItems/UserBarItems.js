import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

const Address = <FontAwesomeIcon icon={faAddressCard} />
const History = <FontAwesomeIcon icon={faHistory} />
const Password = <FontAwesomeIcon icon={faUnlockAlt} />
const Payment = <FontAwesomeIcon icon={faMoneyCheck} />

export const UserBarTopItems = [
    {
        title: 'My Details',
        path: '/my-details',
        cName: 'actived',
        icon: Address
    },
    {
        title: 'Payment Details',
        path: '/payment-details',
        cName: 'payment',
        icon: Payment
    },
    {
        title: 'Change Password',
        path: '/change-password',
        cName: 'password',
        icon: Password
    },
    {
        title: 'Order History',
        path: '/order-history',
        cName: 'history',
        icon: History
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
        path: '/sign-in',
        cName: 'nav-text'
    }
];