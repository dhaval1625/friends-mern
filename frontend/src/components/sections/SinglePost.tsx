import { Avatar, AvatarFallback, AvatarImage  } from '../ui/avatar';
import { Card, CardContent, CardHeader } from '../ui/card';
import { IPost } from '@/lib/definitions';
import { BiUser } from 'react-icons/bi';
import { Image } from '../ui/wrapper';
import TitlePrimary from '../Typography/TitlePrimary';
import TextPrimary from '../Typography/TextPrimary';

interface PostProps {
   post: IPost;
}

function SinglePost({
   post: { author, content, img, createdAt, likes, comments },
}: PostProps) {
   return (
      <Card>
         <CardHeader>
            <div className="flex items-center space-x-2">
               <Avatar>
                  <AvatarImage src={author.dp} />
                  <AvatarFallback className='text-neutral-500 md:text-2xl text-lg'>
                     <BiUser />
                  </AvatarFallback>
               </Avatar>
               <TitlePrimary>{author.name}</TitlePrimary>
            </div>
         </CardHeader>
         <CardContent className='space-y-4'>
            {img && <Image maxWidth={350} src={img} alt={content} />}
            <TextPrimary>{content}</TextPrimary>
         </CardContent>
      </Card>
   );
}
export default SinglePost;
