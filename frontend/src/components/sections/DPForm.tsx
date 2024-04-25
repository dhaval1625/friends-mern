import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import TextSecondary from '../Typography/TextSecondary';
import { BiUser } from 'react-icons/bi';
import { cn } from '@/lib/utils';
import { useState, useRef } from 'react';
import imageCompression from 'browser-image-compression';
import { v4 as uuid } from 'uuid';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { storage } from '@/lib/firebase';

function DPForm() {
   const uploadDP = useRef<HTMLInputElement>(null);
   // const [DP, setDP] = useState(null);
   const [dpURL, setDpURL] = useState<null | string>(null);
   const [fileURL, setFileURL] = useState<string>('');

   function uploadImageHandler() {
      uploadDP.current?.click();
   }

   function displayImageHandler(file: File) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
         const result = e.target!.result as string;
         if (result) setFileURL(result);
      };

      fileReader.readAsDataURL(file);

      uploadImage(file);
   }

   const uploadImage = async function (imageFile: File) {
      const options = {
         maxSizeMB: 0.3,
         maxWidthOrHeight: 1920,
         useWebWorker: true,
      };
      const compressedImage = await imageCompression(imageFile, options);

      // const path = ref(storage, `dp-images/${uuid()}-${imageFile.name}`);

      // await uploadBytes(path, compressedImage);
      // const url = await getDownloadURL(path);
      // console.log('image uploaded url', url);
      // setDpURL(url);
   };

   return (
      <Card className="max-w-md w-full">
         <CardHeader>
            <CardTitle className="text-xl">Upload Your DP</CardTitle>
            <CardDescription>
               Upload your awesome picture which will represent you in this app
               (optional)
            </CardDescription>
         </CardHeader>
         <CardContent>
            <div
               onClick={uploadImageHandler}
               className={cn(
                  'border border-neutral-700/40 border-dashed',
                  'rounded-md p-4 flex items-center space-x-5',
                  'cursor-pointer hover:border-neutral-700'
               )}
            >
               <Avatar size="2xl">
                  <AvatarImage src={fileURL} />
                  <AvatarFallback className="text-neutral-500">
                     <BiUser size="3rem" />
                  </AvatarFallback>
               </Avatar>
               <TextSecondary className="max-w-[200px]">
                  Drag and drop an image or browse on your device
               </TextSecondary>
            </div>
            <input
               onChange={(e) =>
                  e.target.files && displayImageHandler(e.target.files[0])
               }
               ref={uploadDP}
               type="file"
               id="profile-picture"
               name="profile-picture"
               hidden
               accept="image/*"
            />
         </CardContent>
      </Card>
   );
}

export default DPForm;
