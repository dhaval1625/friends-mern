import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const avatarVariants = cva(
   'relative flex shrink-0 overflow-hidden rounded-full',
   {
      variants: {
         size: {
            default: 'h-10 w-10',
            sm: 'h-6 w-6',
            md: 'h-10 w-10',
            lg: 'h-12 w-12',
            xl: 'h-16 w-16',
            '2xl': 'w-20 h-20 md:h-24 md:w-24',
         },
      },
      defaultVariants: {
         size: 'default',
      },
   }
);

interface AvatarProps
   extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
      VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<
   React.ElementRef<typeof AvatarPrimitive.Root>,
   AvatarProps
>(({ className, size, ...props }, ref) => (
   <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size, className }))}
      {...props}
   />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
   React.ElementRef<typeof AvatarPrimitive.Image>,
   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
   <AvatarPrimitive.Image
      ref={ref}
      className={cn('aspect-square h-full w-full object-cover', className)}
      {...props}
   />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
   React.ElementRef<typeof AvatarPrimitive.Fallback>,
   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
   <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
         'flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800',
         className
      )}
      {...props}
   />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
