//local middleware
export const logger = store => {
  return next => {
    return action => {
      console.log(
        "[MIDDLEWARE] PrevState",
        store.getState(prevState => {
          return prevState;
        })
      );
      console.log("[MIDDLEWARE] Dispatching", action);
      const result = next(action);
      console.log("[MIDDLEWARE] NextState", store.getState());
      return result;
    };
  };
};

export default logger;
