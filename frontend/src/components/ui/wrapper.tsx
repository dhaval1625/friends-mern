import { cn } from '@/lib/utils';
import Image, { ImageProps as NextImageProps } from 'next/image';
import { PropsWithChildren } from 'react';

interface ImageProps extends NextImageProps {
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

export function ResponsiveImage({
   maxWidth,
   src,
   alt,
   wrapperClass,
   imgClass,
   width,
   height,
   ...imgProps
}: PropsWithChildren<ImageProps>) {
   const maxWidthPx = maxWidth ? `${maxWidth.toString()}px` : 'none';

   return (
      <div
         style={{ maxWidth: maxWidthPx }}
         className={cn('overflow-hidden flex', wrapperClass)}
      >
         <Image
            className={cn('w-full max-w-full object-cover h-auto', imgClass)}
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...imgProps}
         />
      </div>
   );
}

export function Container({
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
