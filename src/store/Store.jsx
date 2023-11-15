import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext();

export function StoreProvider(props) {
  const [user, setUser] = useState(null);

  return (
    <StoreContext.Provider value={{ user, setUser }}>
      {props.children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes,
};
