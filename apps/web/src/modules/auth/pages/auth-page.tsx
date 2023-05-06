import clsx from 'clsx';
import { useState } from 'react';
import { Button } from '../../../shared/components/button';
import { InputField } from '../components/input-field';
import { useSignInMutation } from '../hooks/use-sign-in-mutation';
import { useSignUpMutation } from '../hooks/use-sign-up-mutation';

export default function AuthPage() {
  const signInMutation = useSignInMutation();
  const signUpMutation = useSignUpMutation();

  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);

    const username = formData.get('username')?.toString();

    const password = formData.get('password')?.toString();

    const email = formData.get('email')?.toString();

    console.table({ username, password, email });

    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    // Register
    if (email) {
      return signUpMutation.mutate({ email, password, username });
    }

    // Login
    return signInMutation.mutate({ username, password });
  };

  return (
    <div className="h-screen fixed top-0 w-full grid place-items-center">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="bg-primary-700 p-5 "
      >
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
          <Button
            as="button"
            type="submit"
            variant="primary"
            isLoading={signInMutation.isLoading ?? signUpMutation.isLoading}
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}
