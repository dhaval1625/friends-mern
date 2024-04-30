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

export interface ILikes {
   list?: {
      author: IPostAuthor;
   }[];
   totalCount: number;
}

export interface IComments {
   list?: {
      author: IPostAuthor;
      content: string;
   }[];
   totalCount: number;
}

export interface IPost {
   _id: string;
   author: IPostAuthor;
   content: string;
   img?: string;
   likes: ILikes;
   comments: IComments;
   createdAt: Date | string;
}
