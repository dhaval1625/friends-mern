import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface ImageProps {
   maxWidth?: number;
   src: string;
   alt: string;
   wrapperClass?: string;
   imgClass?: string;
}

interface WidthProps {
   maxWidth: number;
   className?: string;
   centered?: boolean;
}

export function Image({
   maxWidth,
   src,
   alt,
   wrapperClass,
   imgClass,
}: PropsWithChildren<ImageProps>) {
   const maxWidthPx = maxWidth ? `${maxWidth.toString()}px` : 'none';

   return (
      <div style={{maxWidth: maxWidthPx}} className={cn('overflow-hidden flex', wrapperClass)}>
         <img
            className={cn('w-full max-w-full object-cover', imgClass)}
            src={src}
            alt={alt}
         />
      </div>
   );
}

export function WidthController({
   maxWidth,
   className,
   children,
   centered = true,
}: PropsWithChildren<WidthProps>) {
   const maxWidthPx = `${maxWidth.toString()}px`;
   return (
      <div
         style={{ maxWidth: maxWidthPx }}
         className={cn({ 'mx-auto': centered }, className)}
      >
         {children}
      </div>
   );
}
