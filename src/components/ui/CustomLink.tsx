'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CustomLinkProps {
   href: string;
   children: React.ReactNode; // This allows any valid React child (string, element, etc.)
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
   const pathname = usePathname();

   console.log('pathname', pathname);

   // Check if the current route is the same as the link's href
   const isActive = pathname === href;

   return (
      <Link
         href={href}
         className={
            isActive
               ? 'text-2xl text-primary-100 transition hover:text-primary-200'
               : 'text-2xl text-gray-600 transition hover:text-primary-200'
         }
      >
         {children}
      </Link>
   );
};

export default CustomLink;
