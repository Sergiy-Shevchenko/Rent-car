import { Routes, Route } from 'react-router-dom';
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
    if (result) setFavorites(result);
  }, []);

  useEffect(() => {
    if (favorites !== favRef.current) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const addFavorites = newFavorit => {
    setFavorites(prevFaf => [...prevFaf, newFavorit]);
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
                addFavorites={addFavorites}
                dellFavorit={dellFavorit}
              />
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
        </Route>
      </Routes>
    </div>
  );
};
