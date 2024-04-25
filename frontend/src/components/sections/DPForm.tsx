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
import { useState } from 'react';
import { Button } from '../ui/button';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FileUploader } from 'react-drag-drop-files';
import { FileInput } from '../ui/input';
import { LoadingMessage } from '../ui/loading';

function DPForm() {
   const [dpURL, setDpURL] = useState<null | string>(null);
   const [uploadedImg, setUploadedImg] = useState<string>('');
   const [isImageUploading, setIsImageUploading] = useState(false);

   async function handleImageUpload(file: File) {
      // display uploaded image on avatar
      fileHandler(file, (url: string) => setUploadedImg(url));

      // get url of uploaded image
      setIsImageUploading(true);
      const url = await uploadImageOnCloud(file);
      setIsImageUploading(false);
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
         <CardContent className="space-y-4">
            <FileUploader
               handleChange={handleImageUpload}
               name="profile-picture"
               dropMessageStyle={{
                  color: 'white',
                  backgroundColor: '#4040409c',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  opacity: 1,
               }}
            >
               <div
                  className={cn(
                     'border border-neutral-700/40 border-dashed',
                     'rounded-md md:p-4 p-3 flex items-center space-x-5',
                     'cursor-pointer hover:border-neutral-700'
                  )}
               >
                  <Avatar size="2xl">
                     <AvatarImage src={uploadedImg} alt="uploaded image" />
                     <AvatarFallback className="text-neutral-500 md:text-5xl text-3xl">
                        <BiUser />
                     </AvatarFallback>
                  </Avatar>
                  <TextSecondary className="max-w-[200px]">
                     Drag and drop an image or browse on your device
                  </TextSecondary>
               </div>
            </FileUploader>
            <FileInput handler={handleImageUpload} id="profile-picture" />
            {isImageUploading && <LoadingMessage message='Uploading Image' />}
            <div className="flex justify-between items-center">
               <Button disabled={!dpURL || isImageUploading}>Continue</Button>
               <Button variant="ghost">
                  <span className="mr-2">Skip</span> <FaArrowRightLong />
               </Button>
            </div>
         </CardContent>
      </Card>
   );
}

export default DPForm;
