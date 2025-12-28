import { useContext } from "react";
import { createdLoadingContext } from "../context/LoadingContext";

function useLoading() {
  const sharedContext = useContext(createdLoadingContext);
  if (!sharedContext) {
    throw new Error("useLoading hook must be used inside the Provider!");
  }
  return sharedContext;
}

export default useLoading;
