import { fakeApiRequest } from '@/lib/utils';
import { DUMMY_POSTS } from '@/lib/dummy-data';
import { useQuery } from '@tanstack/react-query';
import SinglePost from '@/components/sections/SinglePost';
import { Container } from '@/components/ui/wrapper';
import NewPost from '@/components/sections/NewPost';

function Feed() {
   const { data, isPending, error } = useQuery({
      queryKey: ['posts'],
      queryFn: () => fakeApiRequest(DUMMY_POSTS),
   });

   if (isPending) {
      return <h2>Fetching post...</h2>;
   }

   if (error) {
      return <h2>Failed to load posts - {error.message}</h2>;
   }

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
