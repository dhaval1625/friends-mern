import { PuffLoader } from 'react-spinners';
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from '../../../tailwind.config';

function Loading() {
    const theme = resolveConfig(tailwindConfig);
    const primaryColor = theme.theme.colors.primary;
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50">
            <PuffLoader color={primaryColor.DEFAULT} size={60} />
            <p className="mt-4 text-primary text-lg font-bold">Loading...</p>
        </div>
    );
}

export default Loading;
