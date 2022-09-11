import { Search, User, Heart } from 'react-feather';

export default [
  {
    link: '/',
    Icon: Search,
    text: 'Search'
  },
  {
    link: '#', // '/favorites',
    Icon: Heart,
    text: 'Favorites'
  },
  {
    link: '#', // '/profile',
    Icon: User,
    text: 'Profile'
  }
];
