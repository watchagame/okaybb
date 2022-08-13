import Image from 'next/image';
import hi from './hi.png';
import Link from 'next/link';

console.log();

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>
            <Image src={hi} alt="Header" />
          </a>
        </Link>
      </p>
    </header>
  );
}
