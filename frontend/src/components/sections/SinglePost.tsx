import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { IPost } from '@/lib/definitions';
import { Image } from '../ui/wrapper';
import TextPrimary from '../Typography/TextPrimary';

import CommentForm from '../ui/comment-form';
import PostReactions from './PostReactions';
import ProfileAvatar from '../ui/ProfileAvatar';
import moment from "moment/moment";
import TextLight from '../Typography/TextLight';

interface PostProps {
   post: IPost;
}

function SinglePost({
   post: { author, content, img, createdAt, likes, comments },
}: PostProps) {

   const handleCommentChange = (comment: string) => {
      console.log(comment);
   };

   // Calculate how old is this post.
  const timePassed = moment(createdAt).fromNow();
   return (
      <Card>
         <CardHeader className='flex justify-between items-start flex-row'>
            <ProfileAvatar img={author.dp} name={author.name} size='lg' />
            <TextLight className='text-[10px]'>{timePassed}</TextLight>
         </CardHeader>
         <CardContent className="space-y-4">
            <TextPrimary>{content}</TextPrimary>
            {img && <Image maxWidth={350} src={img} alt={content} />}
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
