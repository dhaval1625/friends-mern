import { ResponsiveImage } from '../ui/wrapper';
import { CgList } from 'react-icons/cg';
import { RiChatSmile3Line } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { ImUsers } from 'react-icons/im';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { BiUser } from 'react-icons/bi';
import CustomLink from '../ui/CustomLink';
import Link from 'next/link';

function Navbar() {
   const routes = [
      { path: '/home', icon: <CgList />, title: 'Home', id: 'r1' },
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
      <header className="fixed top-0 left-0 w-full app-navbar">
         <div className="container">
            <div className="flex justify-between py-4">
               <Link href="/home">
                  <ResponsiveImage width={50} height={50} src='/Facebook_icon.svg' maxWidth={50} alt="logo" />
               </Link>
               <nav className="flex">
                  <ul className="flex items-center space-x-4 sm:space-x-6">
                     {routes.map((item) => (
                        <li key={item.id}>
                           <CustomLink href={item.path}>{item.icon}</CustomLink>
                        </li>
                     ))}
                     <li>
                        <button className="flex text-2xl text-gray-600 transition hover:text-primary-200">
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
