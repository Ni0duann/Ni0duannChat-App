import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { AuthContext } from "./AuthContext";

interface ChatContextProps {
  data: dataInterface;
  dispatch: any;
}

interface dataInterface {
  chatId: string;
  user: UserInterface;
}

interface ChatContextProviderProps {
  children: ReactNode;
}

interface UserInterface {
  uid: string;
  photoURL: string;
  displayName: string;
}

export const ChatContext = createContext<ChatContextProps>();

export const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const InITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const { currentUser } = useContext(AuthContext);

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, InITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
