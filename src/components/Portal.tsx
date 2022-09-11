import usePortal from '../hooks/usePortal';

function Portal({ children }: { children: JSX.Element }) {
  usePortal();

  return children;
}

export default Portal;
