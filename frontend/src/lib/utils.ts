import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import imageCompression from 'browser-image-compression';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { QueryClient } from '@tanstack/react-query';
import { IPost } from './definitions';

export const queryClient = new QueryClient();

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const uploadImageOnCloud = async function (imageFile: File) {
   const options = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
   };
   const compressedImage = await imageCompression(imageFile, options);
   const path = ref(storage, `friends-images/${uuid()}-${imageFile.name}`);

   await uploadBytes(path, compressedImage);
   const url = await getDownloadURL(path);
   return url;
};

export const fileHandler = (file: File, cb: Function) => {
   const fileReader = new FileReader();
   fileReader.onload = (e) => {
      const result = e.target!.result as string;
      if (result) cb(result);
   };
   fileReader.readAsDataURL(file);
};

export const fakeApiRequest = (data: IPost[]): Promise<IPost[]> => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(data);
      }, 2000);
   });
}
