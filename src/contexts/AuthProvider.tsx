"use client";
import api from "@/lib/api";
import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
    useTransition,
} from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/utils/token.constant";

type AuthProviderProps = {
    children: React.ReactNode;
};

type User = {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    image: string;
};

type UserAuthentication = {
    user: User;
    tokens: TokenPair;
};

type TokenPair = {
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshToken: string;
    refreshTokenExpiresIn: number;
};

interface IAuthContext {
    user: User | null;
    isLogin: boolean;
    loading: boolean;
    saveAuth: (auth: UserAuthentication) => void;
    updateAccount: (account: User) => void;
    logout: () => void;
}

const AuthContext = React.createContext<IAuthContext | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, startFetchUser] = useTransition();

    useEffect(() => {
        startFetchUser(() => {
            auth(logout).then((data) => setUser(data));
        });
    }, []);

    const saveAuth = (auth: UserAuthentication) => {
        sessionStorage.setItem("user", JSON.stringify(auth.user));

        Cookies.set(ACCESS_TOKEN_KEY, auth.tokens.accessToken, {
            expires: new Date(
                new Date().getTime() + auth.tokens.accessTokenExpiresIn
            ),
        });

        Cookies.set(REFRESH_TOKEN_KEY, auth.tokens.refreshToken, {
            expires: new Date(
                new Date().getTime() + auth.tokens.refreshTokenExpiresIn
            ),
        });
        setUser(auth.user);
    };

    const logout = () => {
        Cookies.remove(ACCESS_TOKEN_KEY);
        Cookies.remove(REFRESH_TOKEN_KEY);
        setUser(null);
        sessionStorage.clear();
        localStorage.clear();
    };

    const updateAccount = (account: User) => {
        setUser(account);
        sessionStorage.setItem("account", JSON.stringify(account));
    };

    const values = {
        isLogin: !!user,
        user,
        saveAuth,
        logout,
        loading,
        updateAccount,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

const auth = async (logout: () => void): Promise<User | null> => {
    const userStorage = sessionStorage.getItem("user");
    const token = Cookies.get(REFRESH_TOKEN_KEY);

    if (!token) {
        sessionStorage.clear();
        return null;
    }

    if (userStorage) {
        return JSON.parse(userStorage);
    }

    try {
        const user = await getUser();

        sessionStorage.setItem("user", JSON.stringify(user));
        return user;
    } catch (error: any) {
        logout();
        return null;
    }
};

const getUser = async (): Promise<User> => {
    const { data } = await api("/users/my-info");
    return data.data;
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === "undefined" || !context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};

export { useAuth, AuthProvider };
