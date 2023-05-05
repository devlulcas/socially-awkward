import { useNavigate } from 'react-router-dom';
import { Button } from './button';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      as="button"
      className="mb-2"
      onClick={() => {
        navigate(-1);
      }}
    >
      Back
    </Button>
  );
}
