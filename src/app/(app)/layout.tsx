import { Fragment } from 'react/jsx-runtime';
import Navbar from '@/components/sections/Navbar';

function MainLayout({ children }: { children: React.ReactNode }) {
   return (
      <Fragment>
         <Navbar />
         <main className="pt-[100px]">
            <div className="container">{children}</div>
         </main>
      </Fragment>
   );
}
export default MainLayout;
