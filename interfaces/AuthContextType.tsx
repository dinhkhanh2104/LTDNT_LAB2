import {User} from "./user"

export interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (email: string, password: string, name: string ) => Promise<void>;
}