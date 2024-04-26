import { UtilityElementProps } from '@/lib/definitions';
import { cn } from '@/lib/utils';

function TitlePrimary({ children, className }: UtilityElementProps) {
   return (
      <h3
         className={cn(
            'text-lg text-neutral-800 font-medium dark:text-neutral-400',
            className
         )}
      >
         {children}
      </h3>
   );
}
export default TitlePrimary;
