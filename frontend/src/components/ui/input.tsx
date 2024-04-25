import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {}

interface FileInputProps {
   handler: (file: File) => Promise<void>;
   id: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      return (
         <input
            type={type}
            className={cn(
               'flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300',
               className
            )}
            ref={ref}
            {...props}
         />
      );
   }
);
Input.displayName = 'Input';

const FileInput = React.forwardRef(
   ({ handler, id }: FileInputProps, ref: React.ForwardedRef<HTMLInputElement>) => (
      <input
         onChange={(e) => e.target.files && handler(e.target.files[0])}
         ref={ref}
         type="file"
         id={id}
         className="hidden"
         hidden
         accept="image/*"
      />
   )
);

export { Input, FileInput };
