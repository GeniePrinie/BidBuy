import {
  showListings,
  showListing,
  placeBid,
  createListing,
  loginUser,
  registerUser,
  logoutUser,
  showProfile,
  editProfile,
} from './features/index.js';
import { redirectToSearchListings } from './helpers/redirects.js';

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
    break;
  case pages.ListingSearch:
    showListings();
    break;
  case pages.ListingDetails:
    showListing().then(() => placeBid());
    break;
  case pages.ListingCreate:
    createListing();
    break;
  case pages.ProfileDetails:
    showProfile();
    break;
  case pages.ProfileEdit:
    editProfile();
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
