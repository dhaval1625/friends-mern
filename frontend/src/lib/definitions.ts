import { PropsWithChildren } from "react";

export interface SignupData {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   cnfPassword: string;
}

export interface JSXCommonProps {
   className?: string
}

export type UtilityElementProps = PropsWithChildren<JSXCommonProps>