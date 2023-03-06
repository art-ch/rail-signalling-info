import Link from 'next/link';
import { UIComponent } from '../../../types';

export type ButtonProps = {
  title?: string;
  link?: string;
  onClick?: () => void;
  children: React.ReactNode;
} & UIComponent;

export const Button = ({ link, onClick, className, children }: ButtonProps) => {
  if (link) {
    return (
      <Link href={link} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
