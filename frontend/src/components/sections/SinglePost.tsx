import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { IPost } from '@/lib/definitions';
import { BiUser } from 'react-icons/bi';
import { Image } from '../ui/wrapper';
import TitlePrimary from '../Typography/TitlePrimary';
import TextPrimary from '../Typography/TextPrimary';
import { useState } from 'react';

interface PostProps {
   post: IPost;
}

function SinglePost({
   post: { author, content, img, createdAt, likes, comments },
}: PostProps) {
   const [comment, setComment] = useState('');

   const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComment(e.target.value);
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
            <div className="flex justify-between items-center">
               <div>
                  <span>{likes.totalCount} Likes</span>
                  <span className="ml-4">{comments.totalCount} Comments</span>
               </div>
               <form>
                  <textarea
                     className="border border-gray-300 rounded-md p-2 w-full"
                     placeholder="Add a comment..."
                     value={comment}
                     onChange={handleCommentChange}
                  />
                  <button
                     type="submit"
                     className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                     Comment
                  </button>
               </form>
            </div>
         </CardFooter>
      </Card>
   );
}
export default SinglePost;
