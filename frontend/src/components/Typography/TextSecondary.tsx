import { UtilityElementProps } from '@/lib/definitions';
import { cn } from '@/lib/utils';

function TextSecondary({ children, className }: UtilityElementProps) {
   return (
      <p
         className={cn(
            'text-sm text-neutral-600 dark:text-neutral-400',
            className
         )}
      >
         {children}
      </p>
   );
}
export default TextSecondary;
