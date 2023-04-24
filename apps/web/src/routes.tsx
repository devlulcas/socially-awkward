import { FeedPage } from './modules/feed/pages/feed-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './shared/layouts/main-layout';
import { PostPage } from './modules/posts/pages/post-page';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/me" element={<FeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
