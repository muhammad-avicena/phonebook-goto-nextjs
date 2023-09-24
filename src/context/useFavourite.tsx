import { createContext, useContext, useState, ReactNode } from 'react';

type FavoritesContextType = {
    favorites: number[];
    addFavorite: (contactId: number) => void;
    removeFavorite: (contactId: number) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

type FavoritesProviderProps = {
    children: ReactNode;
};

export function FavoritesProvider({ children }: FavoritesProviderProps) {
    const [favorites, setFavorites] = useState<number[]>([]);

    const addFavorite = (contactId: number) => {
        setFavorites([...favorites, contactId]);
    };

    const removeFavorite = (contactId: number) => {
        setFavorites(favorites.filter((id) => id !== contactId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}
