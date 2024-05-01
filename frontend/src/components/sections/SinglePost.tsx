import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { IPost } from '@/lib/definitions';
import { Image } from '../ui/wrapper';
import TextPrimary from '../Typography/TextPrimary';

import CommentForm from '../ui/comment-form';
import PostReactions from './PostReactions';
import ProfileAvatar from '../ui/ProfileAvatar';

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
            <ProfileAvatar img={author.dp} name={author.name} size='lg' />
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
