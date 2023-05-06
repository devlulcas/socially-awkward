import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useProfileQuery } from '../../modules/profile/hooks/use-profile-query';
import { Button } from '../components/button';
import { useSignOutMutation } from '../../modules/auth/hooks/use-sign-out-mutation';

export function MainLayout() {
  const profileQuery = useProfileQuery();

  const signOutMutation = useSignOutMutation();

  return (
    <div className="bg-primary-950 text-primary-50 min-h-screen">
      <header className="z-50 sticky top-0 p-2 h-14 bg-primary-800 flex justify-between">
        <img src={logo} alt="avatar" />

        <div className="flex items-center gap-2">
          <Button as="a" to="/" variant="secondary">
            Feed
          </Button>

          {profileQuery.data ? (
            <>
              <Button as="a" to="me">
                {profileQuery.data.username}
              </Button>

              <Button as='button' onClick={() => signOutMutation.mutate()}>Sign out</Button>
            </>
          ) : (
            <Button as="a" to="login">
              Login
            </Button>
          )}
        </div>
      </header>

      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}
