import { PropsWithChildren, useState } from 'react';
import { Button } from './button';
import { GrSend } from 'react-icons/gr';
import { cn } from '@/lib/utils';

interface IProps {
   onSubmit: (comment: string) => void;
}

function CommentForm({ onSubmit }: PropsWithChildren<IProps>) {
   const [comment, setComment] = useState('');

   const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      if (!comment || comment.length === 0) {
         return;
      }

      onSubmit(comment);
   };

   return (
      <form className="relative flex" onSubmit={submitHandler}>
         <textarea
            className={cn(
               'border border-gray-300 rounded-full text-xs',
               'focus-visible:outline-1 focus-visible:outline-neutral-400/70',
               'px-4 py-3 w-full resize-none '
            )}
            id='add-comment'
            placeholder="Add comment..."
            rows={1}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
         />
         <Button
            className="absolute bottom-1 right-2 text-primary"
            type="submit"
            variant="ghost"
            size="icon-md"
            disabled={comment.length === 0}
         >
            <GrSend />
         </Button>
      </form>
   );
}
export default CommentForm;
