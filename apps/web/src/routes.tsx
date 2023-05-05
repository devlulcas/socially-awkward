import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './modules/auth/pages/auth-page';
import FeedPage from './modules/feed/pages/feed-page';
import PostPage from './modules/posts/pages/post-page';
import ProfilePage from './modules/profile/pages/profile-page';
import { MainLayout } from './shared/layouts/main-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <FeedPage />,
      },
      {
        path: '/posts/:id',
        element: <PostPage />,
      },
      {
        path: '/me',
        element: <ProfilePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
