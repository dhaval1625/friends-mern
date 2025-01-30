import { UtilityElementProps } from '@/lib/definitions';
import { cn } from '@/lib/utils';

function TextPrimary({ children, className }: UtilityElementProps) {
   return (
      <p
         className={cn(
            'text-base dark:text-neutral-400',
            className
         )}
      >
         {children}
      </p>
   );
}
export default TextPrimary;
