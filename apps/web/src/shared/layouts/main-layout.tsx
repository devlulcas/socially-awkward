import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { Button } from '../components/button';

export function MainLayout() {
  return (
    <div className="bg-primary-950 text-primary-50 min-h-screen">
      <header className="z-50 sticky top-0 p-2 h-14 bg-primary-800 flex justify-between">
        <img src={logo} alt="avatar" />

        <div className="flex items-center gap-2">
          <Button as="a" to="/" variant="secondary">
            Feed
          </Button>

          <Button as="a" to="login">
            Login
          </Button>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
