import { FC } from 'react';
import { MainProps } from "./models";
import './Main.css';




const Main: FC<MainProps> = () => {
  return (
    <div className="main"  >
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default Main;
