import {
  faAddressCard, faHistory, faUnlockAlt, faBookOpen, faBullseye
} from '@fortawesome/free-solid-svg-icons';

export const UserBarTopItems = [
  {
    title: 'My Details',
    path: '/mydetails',
    cName: 'my-details',
    icon: faAddressCard,
    id: 'my-details',
  },
  {
    title: 'Change Password',
    path: '/change-password',
    cName: 'password',
    icon: faUnlockAlt,
    id: 'password',
  },
  {
    title: 'Order History',
    path: '/order-history',
    cName: 'history',
    icon: faHistory,
    id: 'history',
  },
];

export const AdminBarTopItems = [
  {
    title: 'My Details',
    path: '/mydetails',
    cName: 'my-details',
    icon: faAddressCard,
    id: 'my-details',
  },
  {
    title: 'Change Password',
    path: '/change-password',
    cName: 'password',
    icon: faUnlockAlt,
    id: 'password',
  },
  {
    title: 'Order History',
    path: '/order-history',
    cName: 'history',
    icon: faHistory,
    id: 'history',
  },
  {
    title: 'Update Menu',
    path: '/manage-pizza',
    cName: 'updateMenu',
    icon: faBookOpen,
    id: 'updateMenu',
  },
  {
    title: 'View Order',
    path: '/view-order',
    cName: 'viewOrder',
    icon: faBullseye,
    id: 'viewOrder',
  },
];

export const UserBarMiddleItems = [
  {
    title: 'Order Now',
    path: '/shopping-cart',
    cName: 'nav-text',
    id: 'orderNow',
  },
];

export const UserBarBottomItems = [
  {
    title: 'Logout',
    path: '#logout',
    cName: 'logout',
    id: 'logout',
  },
];
