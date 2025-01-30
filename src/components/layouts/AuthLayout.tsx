import { cn } from '@/lib/utils';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
   return (
      <div
         className={cn(
            'min-h-screen flex items-center justify-center py-8 px-2',
            'ld-gradiant-bg ld-animate'
         )}
      >
         <Outlet />
      </div>
   );
}

export default AuthLayout;
