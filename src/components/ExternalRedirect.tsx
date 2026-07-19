import { useEffect } from 'react';

interface ExternalRedirectProps {
  to: string;
}

export default function ExternalRedirect({ to }: ExternalRedirectProps) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}
