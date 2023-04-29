import { showListings, showListing } from './features/index.js';

const pages = {
  Start: '/index.html',
  Home: '/',
  Register: '/src/html/user/register/',
  Login: '/src/html/user/login/',
  Logout: '/src/html/user/logout/',
  Profile: '/src/html/user/profile/',
  ListingCreate: '/src/html/listing/create/',
  ListingDetails: '/src/html/listing/details/',
  ListingSearch: '/src/html/listing/search/',
};

const path = location.pathname;

switch (path) {
  case pages.Start:
  case pages.Home:
  case pages.ListingSearch:
    showListings();
    break;
  case pages.ListingDetails:
    showListing();
    break;
  case pages.ListingCreate:
    // createListing();
    break;
  //   case pages.Profile:
  //     showProfile();
  //     break;
  //   case pages.Register:
  //     registerUser();
  //     break;
  //   case pages.Login:
  //     loginUser();
  //     break;
  //   case pages.Logout:
  //     lougoutUser();
  //     break;
  default:
    break;
}
