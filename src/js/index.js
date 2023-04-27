import { createListing } from './features/index.js';

const pages = {
  Start: '/index.html',
  Home: '/',
  Register: '/html/user/register/',
  Login: '/html/user/login/',
  Logout: '/html/user/logout/',
  Profile: '/html/user/profile/',
  ListingCreate: '/html/listing/create/',
  ListingDetails: '/html/listing/details/',
  ListingSearch: '/html/listing/search/',
};

const path = location.pathname;

switch (path) {
  case pages.Start:
  case pages.Home:
  case pages.ListingSearch:
    //     showListings();
    //     break;
    //   case pages.ListingDetails:
    //     showListing();
    break;
  case pages.ListingCreate:
    createListing();
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
