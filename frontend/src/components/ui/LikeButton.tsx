import { useState } from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';

function LikeButton() {
   const [isLiked, setIsLiked] = useState(false);

   const clickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
      setIsLiked((prev) => !prev);
   };

   return (
      <button
         onClick={clickHandler}
         className="text-blue-400 hover:text-blue-600 text-lg"
      >
         {isLiked ? <BiSolidLike /> : <BiLike />}
      </button>
   );
}
export default LikeButton;
