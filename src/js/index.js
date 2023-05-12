import {
  showListings,
  showListing,
  createListing,
  loginUser,
  registerUser,
  logoutUser,
  showProfile,
  editProfile,
} from './features/index.js';
import { redirectToSearchListings } from './helpers/redirects.js';
import { showAccount } from './helpers/showAccount/showAccount.js';
import { showCredits } from './helpers/showCredits/showCredits.js';

const pages = {
  Start: '/index.html',
  Home: '/',
  Register: '/src/html/user/register/',
  Login: '/src/html/user/login/',
  Logout: '/src/html/user/logout/',
  ProfileDetails: '/src/html/profile/details/',
  ProfileEdit: '/src/html/profile/edit/',
  ListingCreate: '/src/html/listing/create/',
  ListingDetails: '/src/html/listing/details/',
  ListingSearch: '/src/html/listing/search/',
};

const path = location.pathname;

switch (path) {
  case pages.Start:
  case pages.Home:
    redirectToSearchListings();
    showCredits();
    showAccount();
    break;
  case pages.ListingSearch:
    showListings();
    showCredits();
    showAccount();
    break;
  case pages.ListingDetails:
    showListing();
    showCredits();
    showAccount();
    break;
  case pages.ListingCreate:
    createListing();
    showCredits();
    showAccount();
    break;
  case pages.ProfileDetails:
    showProfile();
    showCredits();
    showAccount();
    break;
  case pages.ProfileEdit:
    editProfile();
    showCredits();
    showAccount();
    break;
  case pages.Register:
    registerUser();
    break;
  case pages.Login:
    loginUser();
    break;
  case pages.Logout:
    logoutUser();
    break;
  default:
    break;
}
