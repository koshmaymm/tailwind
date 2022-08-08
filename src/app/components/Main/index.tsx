import { FC } from 'react';
import { MainProps } from "./models";
import './Main.css';

import Headers from "../Headers";


const Main: FC<MainProps> = () => {
  return (
    <div className="main"  >
      <Headers />
    </div>
  );
};

export default Main;
