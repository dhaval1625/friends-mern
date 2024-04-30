import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { IPost } from '@/lib/definitions';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { BiUser } from 'react-icons/bi';
import { Image } from '../ui/wrapper';
import TitlePrimary from '../Typography/TitlePrimary';
import TextPrimary from '../Typography/TextPrimary';
import { useState } from 'react';

import CommentForm from '../ui/comment-form';
import PostReactions from './PostReactions';

interface PostProps {
   post: IPost;
}

function SinglePost({
   post: { author, content, img, createdAt, likes, comments },
}: PostProps) {

   const handleCommentChange = (comment: string) => {
      console.log(comment);
   };
   return (
      <Card>
         <CardHeader>
            <div className="flex items-center space-x-2">
               <Avatar>
                  <AvatarImage src={author.dp} />
                  <AvatarFallback className="text-neutral-500 md:text-2xl text-lg">
                     <BiUser />
                  </AvatarFallback>
               </Avatar>
               <TitlePrimary>{author.name}</TitlePrimary>
            </div>
         </CardHeader>
         <CardContent className="space-y-4">
            {img && <Image maxWidth={350} src={img} alt={content} />}
            <TextPrimary>{content}</TextPrimary>
         </CardContent>
         <CardFooter>
            <div className="space-y-3 w-full">
               <PostReactions likes={likes} comments={comments} />
              <CommentForm onSubmit={handleCommentChange} />
            </div>
         </CardFooter>
      </Card>
   );
}
export default SinglePost;
