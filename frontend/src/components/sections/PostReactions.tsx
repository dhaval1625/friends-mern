import { IComments, ILikes } from '@/lib/definitions';
import TextLight from '../Typography/TextLight';
import { PropsWithChildren } from 'react';
import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from '@/components/ui/collapsible';
import ProfileAvatar from '../ui/ProfileAvatar';
import LikeButton from '../ui/LikeButton';

interface IProps {
   likes: ILikes;
   comments: IComments;
}

function PostReactions({ likes, comments }: PropsWithChildren<IProps>) {
   return (
      <Collapsible>
         <div className="flex items-center space-x-4">
            <LikeButton />

            {/* if there are likes then show hover card */}
            {likes.totalCount > 0 ? (
               <HoverCard openDelay={50}>
                  <HoverCardTrigger>
                     <TextLight className="cursor-pointer">
                        {likes.totalCount} Likes
                     </TextLight>
                  </HoverCardTrigger>
                  <HoverCardContent className="max-h-[300px] overflow-auto">
                     <div className="space-y-3">
                        {likes.list?.map((item) => (
                           <div
                              key={item.author._id}
                              className="flex items-center space-x-2"
                           >
                              <ProfileAvatar
                                 img={item.author.dp}
                                 name={item.author.name}
                              />
                           </div>
                        ))}
                     </div>
                  </HoverCardContent>
               </HoverCard>
            ) : (
               // else show 0 likes text only
               <TextLight>{likes.totalCount} Likes</TextLight>
            )}

            {/* if there are comments show comments trigger button else show text only */}
            {comments.totalCount > 0 ? (
               <CollapsibleTrigger>
                  <TextLight>{comments.totalCount} Comments</TextLight>
               </CollapsibleTrigger>
            ) : (
               <TextLight>{comments.totalCount} Comments</TextLight>
            )}
         </div>
         {comments.totalCount > 0 && (
            <CollapsibleContent className="mt-4 space-y-3">
               {comments.list?.map((item, idx) => (
                  <div
                     className="border-b border-gray-100 pb-2 last:border-0"
                     key={item.author._id + '-' + idx}
                  >
                     <ProfileAvatar
                        img={item.author.dp}
                        name={item.author.name}
                     />
                     <TextLight className="pl-8 font-medium text-neutral-800">
                        {item.content}
                     </TextLight>
                  </div>
               ))}
            </CollapsibleContent>
         )}
      </Collapsible>
   );
}
export default PostReactions;
