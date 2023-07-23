import { IconType } from 'react-icons';

type sideicon = {
  name: string;
  icon: IconType;
};

type tweet = {
  username: string;
  name: string;
  posted: string;
  content: string;
  imageUrl: string;
  likes: string;
  stats: string;
  comments: string;
  retweets: string;
};

type trendingData = {
  category: string;
  location: string;
  tweets: string;
  hashTag: string;
};
