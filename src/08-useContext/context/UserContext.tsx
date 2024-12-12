import { createContext } from "react";


export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContext | null>(null);


// export const UserContext = createContext(null);