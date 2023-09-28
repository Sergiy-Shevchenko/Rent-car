import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { lazy, useEffect, useRef, useState } from 'react';

const CarCatalog = lazy(() => import('../pages/CarCatalogPage/index'));
const CarFavorite = lazy(() => import('../pages/CarFavoritPage/index'));

export const App = () => {
  const [favorites, setFavorites] = useState([]);
  const favRef = useRef(favorites);
  
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('favorites'));
    console.log(result)
    if (result) setFavorites(result);
  }, []);

  useEffect(() => {
    if (favorites !== favRef.current) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const addFavorites = newFavorit => {
    let arrayIsFavorite = false;

    favorites.forEach(el => {
      if (el.id === newFavorit.id) {
        arrayIsFavorite = true;
        alert('This car has been added to the favorites collection');
      }
    });
    if (!arrayIsFavorite) {
      setFavorites(prev => [...prev, newFavorit]);
    }  
  };

  const dellFavorit = favoritId => {
    setFavorites(favorites.filter(({ id }) => id !== favoritId));
      return;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="catalog"
            element={
              <CarCatalog 
              addFavorit={addFavorites} 
              dellFavorit={dellFavorit} />
            }
          />
          <Route
            path="favorites"
            element={
              <CarFavorite
                collection={favorites}
                dellFavorit={dellFavorit}
                setCollection={setFavorites}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
