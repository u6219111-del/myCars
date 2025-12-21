import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(car) {
    setFavorites(prevFavorites => {
      const existingFavorite = prevFavorites.find(fav => fav.id === car.id);
      if (existingFavorite) {
        return prevFavorites;
      } else {
        return [...prevFavorites, car];
      }
    });
  }

  function removeFromFavorites(id) {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== id));
  }

  function isFavorite(id) {
    return favorites.some(fav => fav.id === id);
  }

  function getFavoritesCount() {
    return favorites.length;
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    getFavoritesCount
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}