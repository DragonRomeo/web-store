import { useContext } from 'react';
import { MyContext } from './MyContext';

export const Internal = ():string => {
  const context = useContext(MyContext);
    console.log(`context is = ${context}`)
  return `bla bla bla bla this is ${context} `
};
