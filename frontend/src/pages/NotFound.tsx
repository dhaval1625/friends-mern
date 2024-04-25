import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

function NotFound() {
   return (
      <section className="py-10">
         <div className="container text-center">
            <div className="not-found-bg">
               <h1 className="text-center text-7xl">404</h1>
            </div>
            <div>
               <h3 className="h2">Look like you're lost</h3>
               <p>the page you are looking for is not available!</p>
               <Link
                  to="/"
                  className={cn(buttonVariants({ variant: 'default' }), 'mt-4')}
               >
                  Go to Home
               </Link>
            </div>
         </div>
      </section>
   );
}
export default NotFound;
