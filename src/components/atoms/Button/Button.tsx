import Link from 'next/link';
import { UIComponent } from '../../../types';

export type ButtonProps = {
  title: string;
  link: string;
} & UIComponent;

export const Button = ({ title, link, className }: ButtonProps) => {
  return (
    <Link href={link} className={className}>
      {title}
    </Link>
  );
};
