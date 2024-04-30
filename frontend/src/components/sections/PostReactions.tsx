import { IComments, ILikes } from '@/lib/definitions';
import TextLight from '../Typography/TextLight';
import { PropsWithChildren } from 'react';
import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { BiUser } from 'react-icons/bi';

interface IProps {
   likes: ILikes;
   comments: IComments;
}

function PostReactions({ likes, comments }: PropsWithChildren<IProps>) {
   return (
      <div className="flex items-center space-x-4">
         {likes.totalCount > 0 ? (
            <HoverCard openDelay={50}>
               <HoverCardTrigger>
                  <TextLight className="cursor-pointer">
                     {likes.totalCount} Likes
                  </TextLight>
               </HoverCardTrigger>
               <HoverCardContent className='max-h-[300px] overflow-auto'>
                  <div className="space-y-3">
                     {likes.list?.map((item) => (
                        <div
                           key={item.author._id}
                           className="flex items-center space-x-2"
                        >
                           <Avatar size="sm">
                              <AvatarImage src={item.author.dp} />
                              <AvatarFallback>
                                 <BiUser />
                              </AvatarFallback>
                           </Avatar>
                           <TextLight>{item.author.name}</TextLight>
                        </div>
                     ))}
                  </div>
               </HoverCardContent>
            </HoverCard>
         ) : (
            <TextLight>{likes.totalCount} Likes</TextLight>
         )}
         <TextLight className="ml-4">{comments.totalCount} Comments</TextLight>
      </div>
   );
}
export default PostReactions;
