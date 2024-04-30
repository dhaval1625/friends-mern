import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { BiUser } from 'react-icons/bi';
import TextLight from '../Typography/TextLight';
import { PropsWithChildren } from 'react';

interface IProps {
   img: string | undefined;
   name: string;
}

function ProfileAvatar({ img, name }: PropsWithChildren<IProps>) {
   return (
      <div className="flex items-center space-x-2">
         <Avatar size="sm">
            <AvatarImage src={img} />
            <AvatarFallback>
               <BiUser />
            </AvatarFallback>
         </Avatar>
         <TextLight className='text-neutral-700'>{name}</TextLight>
      </div>
   );
}
export default ProfileAvatar;
