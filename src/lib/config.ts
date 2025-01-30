import { z } from 'zod';

export const SIGNUP_FORM_SCHEMA = {
   firstName: z.string().min(1, {
      message: 'First name is required.',
   }),
   lastName: z.string().min(1, {
      message: 'Last name is required.',
   }),
   email: z
      .string()
      .min(1, { message: 'Email is required!' })
      .email('Please enter valid email!'),
   password: z
      .string()
      .min(6, { message: 'Password must be atleast 6 characters long!' }),
   cnfPassword: z.string(),
};

export const SIGNUP_FORM_INITIAL_VALUES = {
   firstName: '',
   lastName: '',
   email: '',
   password: '',
   cnfPassword: '',
};

export const ACCEPTED_IMAGE_FILE_TYPES = [
   'JPG',
   'PNG',
   'GIF',
   'JPEG',
   'SVG',
   'WebP',
];
