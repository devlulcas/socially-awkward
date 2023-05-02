import { createBrowserRouter } from 'react-router-dom';

import FeedPage, {
  action as postAction,
  loader as feedLoader,
} from './modules/feed/pages/feed-page';

import PostPage, {
  loader as postLoader,
} from './modules/posts/pages/post-page';

import ProfilePage, {
  loader as profileLoader,
} from './modules/profile/pages/profile-page';

import LoginPage, {
  action as authAction,
} from './modules/auth/pages/auth-page';

import { MainLayout } from './shared/layouts/main-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <FeedPage />,
        loader: feedLoader,
        action: postAction,
      },
      {
        path: '/posts/:id',
        element: <PostPage />,
        loader: postLoader,
      },
      {
        path: '/me',
        element: <ProfilePage />,
        loader: profileLoader,
      },
      {
        path: 'login',
        element: <LoginPage />,
        action: authAction,
      },
    ],
  },
]);
