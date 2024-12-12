import { useState } from "react"
import { User, UserContext } from "./UserContext"

// const user = {
//   id: 1,
//   name: 'Julieta',
//   email: 'juli@gmail.com',
// }

interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: UserProviderProps) => {

  const [ user, setUser ] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}
