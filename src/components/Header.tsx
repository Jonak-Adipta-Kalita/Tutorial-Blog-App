import Link from "next/link";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-center items-center space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2 cursor-pointer">
        <Link href="/">
          <Image
            src="/favicon.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
          />
        </Link>
        <h1>JAK Blog App</h1>
      </div>
    </header>
  );
};

export default Header;
