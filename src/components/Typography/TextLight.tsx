import { UtilityElementProps } from '@/lib/definitions';
import { cn } from '@/lib/utils';

function TextLight({ children, className }: UtilityElementProps) {
   return (
      <p
         className={cn(
            'text-xs text-neutral-500 font-light dark:text-neutral-400',
            className
         )}
      >
         {children}
      </p>
   );
}
export default TextLight;
