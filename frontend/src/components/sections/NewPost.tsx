import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { cn, fileHandler, uploadImageOnCloud } from '@/lib/utils';
import { FileUploader } from 'react-drag-drop-files';
import { FileInput } from '../ui/input';
import { Image } from '../ui/wrapper';
import TextLight from '../Typography/TextLight';
import { ACCEPTED_IMAGE_FILE_TYPES } from '@/lib/config';
import { toast } from '../ui/use-toast';

function NewPost() {
   const [isFocus, setIsFocus] = useState(false);
   const [showForm, setShowForm] = useState(false);
   const [imgURL, setImgURL] = useState<null | string>(null);
   const [uploadedImg, setUploadedImg] = useState<string>('');

   async function imageUploadHandler(file: File) {
      console.log(file, 'uploaded file')
      // display uploaded image on avatar
      fileHandler(file, (url: string) => setUploadedImg(url));

      // get url of uploaded image
      // const url = await uploadImageOnCloud(file);
      // setImgURL(url);
   }

   return (
      <div>
         {!showForm ? (
            <Button
               onClick={() => setShowForm(true)}
               className="w-full"
               variant="outline"
            >
               Post Something Now...
            </Button>
         ) : (
            <Card
               className={cn({ 'border-primary-800/70 shadow-inner': isFocus })}
            >
               <CardContent className="pt-4 sm:pt-6">
                  <form>
                     <textarea
                        id="post-content"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        className="w-full resize-none focus-visible:outline-none text-sm"
                        rows={5}
                        placeholder="What's on your mind..."
                     ></textarea>
                     <div className="flex items-end justify-between">
                        <FileUploader
                           name='post-img'
                           // types={ACCEPTED_IMAGE_FILE_TYPES}
                           fileOrFiles={uploadedImg}
                           handleChange={imageUploadHandler}
                           onSizeError={(err: any) => console.log(err)}
                           onTypeError={(err: any) => toast({description: err, variant: 'destructive'})}
                        >
                           <div className="flex items-center justify-center border rounded-md w-24 h-24">
                              {uploadedImg ? (
                                 <Image
                                    src={uploadedImg}
                                    alt="uploaded image"
                                 />
                              ) : (
                                 <TextLight>Upload image</TextLight>
                              )}
                           </div>
                        </FileUploader>
                        {/* <FileInput id='post-img' handler={imageUploadHandler} /> */}
                        <Button>Send</Button>
                     </div>
                  </form>
               </CardContent>
            </Card>
         )}
      </div>
   );
}
export default NewPost;
