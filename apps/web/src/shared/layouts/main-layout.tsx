import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { Button } from '../components/button';

export function MainLayout() {
  return (
    <div className="bg-primary-950 text-primary-50 min-h-screen">
      <header className="sticky top-0 p-2 h-14 bg-primary-800 flex justify-between">
        <img src={logo} alt="avatar" />

        <div className="flex items-center gap-2">
          <Button>Sign in</Button>
          <Button>Sign Up</Button>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
