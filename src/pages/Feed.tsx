import SinglePost from '@/components/sections/SinglePost';
import { Container } from '@/components/ui/wrapper';
import NewPost from '@/components/sections/NewPost';
import { IPost } from '@/lib/definitions';

function Feed({ data }: { data: IPost[] }) {
   return (
      <Container maxWidth={500}>
         <NewPost />
         <div className="mt-8 space-y-4 pb-10">
            {data.map((item) => (
               <SinglePost key={item._id} post={item} />
            ))}
         </div>
      </Container>
   );
}
export default Feed;
