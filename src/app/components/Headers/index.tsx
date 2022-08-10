import { FC } from 'react';
import './index.css';


const Headers: FC = () => {
    return (
        <div className="headers flex items-center space-x-12"  >
            <h1 className="text-4xl font-bold underline bg-red-500 mx-1 hover:text-brightRedLight">
                text-4xl font-bold underline
            </h1>
            <h2 className="font-bold bg-zinc-300 mx-2 hover:text-darkGrayishBlue">
                font-bold
            </h2>
            <h2 className="underline bg-amber-100 mx-3">
                underline
            </h2>
            <span className="text-4xl mx-4">Span text</span>
            <span className="text-3xl mx-5">Span text</span>
            <span className="text-2xl mx-6">Span text</span>
            <span className="text-xl mx-7">Span text</span>
            <span className="text-xs mx-8">Span text</span>
        </div>
    );
};

export default Headers;
