import { FeedPage } from './modules/feed/pages/feed-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './shared/layouts/main-layout';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<FeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
