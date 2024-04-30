import { UtilityElementProps } from '@/lib/definitions';
import { cn } from '@/lib/utils';

function TextLight({ children, className }: UtilityElementProps) {
   return (
      <h3
         className={cn(
            'text-xs text-neutral-500 font-light dark:text-neutral-400',
            className
         )}
      >
         {children}
      </h3>
   );
}
export default TextLight;
