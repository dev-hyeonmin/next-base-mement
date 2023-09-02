import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface MediaQueriesProps {
  children: ReactNode;
}

export const Mobile: React.FC<MediaQueriesProps> = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return <>{isMobile && children}</>;
};

export const Pc: React.FC<MediaQueriesProps> = ({ children }) => {
  const isPc = useMediaQuery({ query: '(min-width: 768px)' });
  return <>{isPc && children}</>;
};