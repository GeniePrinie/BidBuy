import {
  showListings,
  showListing,
  createListing,
  loginUser,
  registerUser,
  logoutUser,
  showProfile,
} from './features/index.js';
import { redirectToSearchListings } from './helpers/redirects.js';

const pages = {
  Start: '/index.html',
  Home: '/',
  Register: '/src/html/user/register/',
  Login: '/src/html/user/login/',
  Logout: '/src/html/user/logout/',
  Profile: '/src/html/profile/',
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
    showListing();
    break;
  case pages.ListingCreate:
    createListing();
    break;
  case pages.Profile:
    showProfile();
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
