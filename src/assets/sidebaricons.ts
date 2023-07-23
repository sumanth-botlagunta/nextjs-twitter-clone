import { BiHomeCircle } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineMessage } from 'react-icons/ai';
import { CiCircleMore } from 'react-icons/ci';
import { sideicon } from '@home/nexttypes';

export const sidebarIcons: sideicon[] = [
  {
    name: 'Home',
    icon: BiHomeCircle,
  },
  {
    name: 'Explore',
    icon: BiSearch,
  },
  {
    name: 'Notifications',
    icon: IoMdNotificationsOutline,
  },
  {
    name: 'Messages',
    icon: AiOutlineMessage,
  },
  {
    name: 'more',
    icon: CiCircleMore,
  },
];
