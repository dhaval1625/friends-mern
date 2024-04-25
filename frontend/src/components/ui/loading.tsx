import { ImSpinner9 } from 'react-icons/im';

export const LoadingMessage = ({ message }: { message: string }) => (
   <div className="space-x-3 flex items-center">
      <ImSpinner9 className="h-4 w-4 animate-spin" />
      <p className="text-sm">{message}</p>
   </div>
);
