import clsx from 'clsx';
import { useState } from 'react';
import {
  ActionFunctionArgs,
  Form,
  useNavigation,
  useRouteError,
} from 'react-router-dom';
import { Button } from '../../../shared/components/button';
import { apiClient } from '../../../shared/config';
import { InputField } from '../components/input-field';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const username = formData.get('username')?.toString();
  const password = formData.get('password')?.toString();
  const email = formData.get('email')?.toString();

  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  // Register
  if (email) {
    const auth = await apiClient.auth.signUp({ email, password, username });
    return auth.data;
  }

  // Login
  const auth = await apiClient.auth.signIn({ username, password });
  return auth.data;
}

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  const navigation = useNavigation();

  const busy = navigation.state === 'submitting';

  const authType = isRegister ? 'Register' : 'Login';

  return (
    <div className="h-screen fixed top-0 w-full grid place-items-center">
      <Form action="/login" method="post" className="bg-primary-700 p-5 ">
        <div className="flex w-full">
          <button
            className={clsx(
              'px-4 py-2 w-full',
              isRegister ? 'bg-blue-800' : 'bg-primary-900'
            )}
            type="button"
            onClick={() => setIsRegister(true)}
          >
            Register
          </button>

          <button
            className={clsx(
              'px-4 py-2 w-full',
              !isRegister ? 'bg-blue-800' : 'bg-primary-900'
            )}
            type="button"
            onClick={() => setIsRegister(false)}
          >
            Login
          </button>
        </div>

        {isRegister && (
          <InputField
            name="email"
            label="Email"
            placeholder="Email"
            id="email"
            type="email"
          />
        )}

        <InputField
          required
          name="username"
          label="Username"
          placeholder="Username"
          id="username"
        />

        <InputField
          required
          name="password"
          label="Password"
          placeholder="Password"
          id="password"
          type="password"
        />

        <div className="flex justify-end mt-4">
          <Button disabled={busy} as="button" type="submit" variant="primary">
            {busy ? '...' : authType}
          </Button>
        </div>
      </Form>
    </div>
  );
}
