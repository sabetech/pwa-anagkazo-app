import * as React from 'react';
import { IUserManager, User } from "../interfaces/ServerResponse"

export const UserContext = React.createContext<IUserManager>(null as any)
interface Props {
  children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = React.useState<User>(null as any)

    const storeUser = (user: User) => {
      setUser(user)
    }

    return (
        <UserContext.Provider value={{user, storeUser }}>
          {children}
        </UserContext.Provider>
      )
}

export default UserProvider;