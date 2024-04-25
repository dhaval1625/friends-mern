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
import { cn, fileHandler, uploadImageOnCloud } from '@/lib/utils';
import { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FileUploader } from 'react-drag-drop-files';

function DPForm() {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [dpURL, setDpURL] = useState<null | string>(null);
   const [uploadedImg, setUploadedImg] = useState<string>('');

   async function handleImageUpload(file: File) {
      // display uploaded image on avatar
      fileHandler(file, (url: string) => setUploadedImg(url));

      // get url of uploaded image
      const url = await uploadImageOnCloud(file);
      setDpURL(url);
   }

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
            <FileUploader
               handleChange={handleImageUpload}
               name="profile-picture"
               dropMessageStyle={{color: 'white', backgroundColor: '#4040409c', fontWeight: 700, fontSize: '1.2rem', opacity: 1}}
            >
               <div
                  className={cn(
                     'border border-neutral-700/40 border-dashed',
                     'rounded-md p-4 flex items-center space-x-5',
                     'cursor-pointer hover:border-neutral-700'
                  )}
               >
                  <Avatar size="2xl">
                     <AvatarImage src={uploadedImg} alt="uploaded image" />
                     <AvatarFallback className="text-neutral-500">
                        <BiUser size="3rem" />
                     </AvatarFallback>
                  </Avatar>
                  <TextSecondary className="max-w-[200px]">
                     Drag and drop an image or browse on your device
                  </TextSecondary>
               </div>
            </FileUploader>
            <input
               onChange={(e) =>
                  e.target.files && handleImageUpload(e.target.files[0])
               }
               ref={fileInputRef}
               type="file"
               id="profile-picture"
               className="hidden"
               hidden
               accept="image/*"
            />
            <div className="flex justify-between items-center mt-4">
               <Button>Continue</Button>
               <Button variant="ghost">
                  <span className="mr-2">Skip</span> <FaArrowRightLong />
               </Button>
            </div>
         </CardContent>
      </Card>
   );
}

export default DPForm;
