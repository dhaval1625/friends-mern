import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Facebook_icon.svg';
import { Image } from '../ui/wrapper';
import { CgList } from 'react-icons/cg';
import { RiChatSmile3Line } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { ImUsers } from 'react-icons/im';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { BiUser } from 'react-icons/bi';

function Navbar() {
   const routes = [
      { path: '/', icon: <CgList />, title: 'Home', id: 'r1' },
      { path: '/friends', icon: <ImUsers />, title: 'Friends', id: 'r2' },
      { path: '/chat', icon: <RiChatSmile3Line />, title: 'Chat', id: 'r3' },
      {
         path: '/profile',
         icon: (
            <Avatar>
               <AvatarImage src="" />
               <AvatarFallback>
                  <BiUser />
               </AvatarFallback>
            </Avatar>
         ),
         title: 'Your Profile',
         id: 'r4',
      },
   ];

   return (
      <header className='fixed top-0 left-0 w-full app-navbar'>
         <div className="container">
            <div className="flex justify-between py-4">
               <Link to="/">
                  <Image src={Logo} maxWidth={50} alt="logo" />
               </Link>
               <nav className="flex">
                  <ul className="flex items-center space-x-6">
                     {routes.map((item) => (
                        <li key={item.id}>
                           <NavLink
                              className={({ isActive }) =>
                                 isActive
                                    ? 'text-2xl text-primary-100 transition hover:text-primary-200'
                                    : 'text-2xl text-gray-600 transition hover:text-primary-200'
                              }
                              to={item.path}
                           >
                              {item.icon}
                           </NavLink>
                        </li>
                     ))}
                     <li>
                        <button className='flex text-2xl text-gray-600 transition hover:text-primary-200'>
                           <IoMdNotificationsOutline />
                        </button>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}
export default Navbar;
