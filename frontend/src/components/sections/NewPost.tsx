import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { cn, fileHandler, uploadImageOnCloud } from '@/lib/utils';
import { FileUploader } from 'react-drag-drop-files';
import { Image } from '../ui/wrapper';
import TextLight from '../Typography/TextLight';
import { ACCEPTED_IMAGE_FILE_TYPES } from '@/lib/config';
import { toast } from '../ui/use-toast';
import { LoadingMessage } from '../ui/loading';

function NewPost() {
   const [isFocus, setIsFocus] = useState(false);
   const [showForm, setShowForm] = useState(false);
   const [uploadedImg, setUploadedImg] = useState<string>('');
   const [isImgUploading, setIsImgUploading] = useState(false);

   // to send in backend
   const [postContent, setPostContent] = useState('');
   const [imgURL, setImgURL] = useState<null | string>(null);

   async function imageUploadHandler(file: File) {
      // display uploaded image on avatar
      fileHandler(file, (url: string) => setUploadedImg(url));

      // get url of uploaded image
      setIsImgUploading(true);
      const url = await uploadImageOnCloud(file);
      setIsImgUploading(false);
      setImgURL(url);
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
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        className="w-full resize-none focus-visible:outline-none text-sm"
                        rows={5}
                        placeholder="What's on your mind..."
                     ></textarea>
                     <div className="flex items-end justify-between">
                        <div className="space-y-3">
                           <FileUploader
                              types={ACCEPTED_IMAGE_FILE_TYPES}
                              handleChange={imageUploadHandler}
                              onTypeError={(err: any) =>
                                 toast({
                                    description: err,
                                    variant: 'destructive',
                                 })
                              }
                           >
                              <div
                                 className={cn(
                                    'flex items-center justify-center border rounded-md w-24 h-24',
                                    'transition cursor-pointer hover:bg-neutral-200'
                                 )}
                              >
                                 {uploadedImg ? (
                                    <Image
                                       wrapperClass="max-h-full"
                                       src={uploadedImg}
                                       alt="uploaded image"
                                    />
                                 ) : (
                                    <TextLight>Upload image</TextLight>
                                 )}
                              </div>
                           </FileUploader>
                           {isImgUploading && <LoadingMessage message='Uploading image' />}
                        </div>
                        <Button disabled={postContent.length === 0}>Send</Button>
                     </div>
                  </form>
               </CardContent>
            </Card>
         )}
      </div>
   );
}
export default NewPost;
