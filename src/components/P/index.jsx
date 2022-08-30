import { useContext } from 'react';
import {GlobalContext} from "../../context/AppContext"

export const P = () => {
    const theContext = useContext(GlobalContext);
    const {
      contextState: { body, counter },
      setState,
      contextState,
    } = theContext;
    return (
      <p onClick={() => setState({ ...contextState, counter:  counter + 1 })}>
        {' '}
        {body}
      </p>
    );
  };
