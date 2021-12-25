/** @format */

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('the action:', action);

  const retrunValue = next(action);

  console.log('the new state:', store.getState());
  console.groupEnd();

  return retrunValue;
};

export default logger;
