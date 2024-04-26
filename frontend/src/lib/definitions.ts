import { PropsWithChildren } from 'react';

export interface SignupData {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   cnfPassword: string;
}

export interface JSXCommonProps {
   className?: string;
}

export type UtilityElementProps = PropsWithChildren<JSXCommonProps>;

export interface IPostAuthor {
   _id: string;
   name: string;
   dp?: string;
}

export interface IPost {
   _id: string;
   author: IPostAuthor;
   content: string;
   img?: string;
   likes: {
      list?: {
         author: IPostAuthor;
      }[];
      totalCount: number;
   };
   comments: {
      list?: {
         author: IPostAuthor;
         content: string;
      }[];
      totalCount: number;
   };
   createdAt: Date | string;
}
