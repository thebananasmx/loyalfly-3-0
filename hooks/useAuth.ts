import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthUser {
    email: string;
}

interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    login: (email: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate checking for a logged-in user on initial load
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const login = async (email: string): Promise<void> => {
        setLoading(true);
        // Placeholder for Firebase Auth logic
        return new Promise(resolve => {
            setTimeout(() => {
                const mockUser = { email: email };
                setUser(mockUser);
                setLoading(false);
                resolve();
            }, 1000);
        });
    };

    const logout = () => {
        // Placeholder for Firebase Auth logic
        setUser(null);
    };

    const value = { user, loading, login, logout };

    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    return React.createElement(AuthContext.Provider, { value: value }, children);
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
