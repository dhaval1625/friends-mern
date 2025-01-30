import { DUMMY_POSTS } from '@/lib/dummy-data';
import { fakeApiRequest } from '@/lib/utils';
import Feed from '@/pages/Feed';

export default async function Page() {
   const data = await fakeApiRequest(DUMMY_POSTS);
   return <Feed data={data} />;
}
