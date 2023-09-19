import { Intermediate } from "./Intermediate";
import { MyContext } from "./MyContext";


export const External = ():JSX.Element => (
    <MyContext.Provider value="Hello, show this message pls">
      <Intermediate />
    </MyContext.Provider>
  );
