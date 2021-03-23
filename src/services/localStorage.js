export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('kanban-flow:state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('kanban-flow:state', serializedState);
  } catch {
    // ignore write errors
  }
};