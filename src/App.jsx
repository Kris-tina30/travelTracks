import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import Loader from './components/Loader/Loader';

import Layout from './components/Layout/Layout.jsx';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Details = lazy(() => import('./pages/Details/Details'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const Features = lazy(() => import('./components/Features/Features'));

function App() {
  return (
    <Layout>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Details />}>
              <Route path="reviews" element={<Reviews />} />
              <Route path="features" element={<Features />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </Layout>
  );
}

export default App;
