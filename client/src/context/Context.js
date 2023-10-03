import { createContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
export const StateContext = createContext();
export const DispatchContext = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("token")) || false,
    token: localStorage.getItem("token") || undefined,
    user: {
      name: localStorage.getItem("name") || undefined,
      email: localStorage.getItem("email") || undefined,
      photo: localStorage.getItem("photo") || undefined,
    },
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "register":
      case "login":
        draft.loggedIn = true;
        draft.token = action.token;
        draft.user = action.user;
        return;
      case "logout":
        draft.loggedIn = false;
        draft.user.name = null;
        draft.user.email = null;
        draft.user.photo = null;
        return;
      case "updateProfile":
        draft.user.name = action.value.name;
        draft.user.email = action.value.email;
        draft.user.photo = action.value.photo;
        return;
      default:
        return;
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("token", state.token);
      localStorage.setItem("name", state.user.name);
      localStorage.setItem("email", state.user.email);
      localStorage.setItem("photo", state.user.photo);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("photo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loggedIn, state.user, state.token]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { ContextProvider };
