import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { BiUser } from 'react-icons/bi';
import TextLight from '../Typography/TextLight';
import { PropsWithChildren } from 'react';
import { SizeVariant } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import TextPrimary from '../Typography/TextPrimary';

interface IProps {
   img: string | undefined;
   name: string;
   size?: SizeVariant;
}

function ProfileAvatar({ img, name, size = 'sm' }: PropsWithChildren<IProps>) {
   let TextComponent = () => (
      <TextLight className="text-neutral-700">{name}</TextLight>
   );

   if (size === 'lg') {
      TextComponent = () => <TextPrimary>{name}</TextPrimary>;
   }

   return (
      <div className="flex items-center space-x-2">
         <Avatar size={size}>
            <AvatarImage src={img} />
            <AvatarFallback
               className={cn({ 'text-neutral-500 text-2xl': size === 'lg' })}
            >
               <BiUser />
            </AvatarFallback>
         </Avatar>
         <TextComponent />
      </div>
   );
}
export default ProfileAvatar;
