import { Fragment } from 'react/jsx-runtime';
import Navbar from '../sections/Navbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
   return (
      <Fragment>
         <Navbar />
         <main className="pt-[100px]">
            <div className="container">
               <Outlet />
            </div>
         </main>
      </Fragment>
   );
}
export default MainLayout;
