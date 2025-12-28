import React, { createContext, useState } from "react";

export const createdLoadingContext = createContext();

function LoadingContext({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  function startLoading() {
    setIsLoading(true);
  }

  const stopLoading = () => {
    setIsLoading(false);
  };

  const values = { isLoading, startLoading, stopLoading };

  return (
    <createdLoadingContext.Provider value={values}>
      {children}
    </createdLoadingContext.Provider>
  );
}

export default LoadingContext;
