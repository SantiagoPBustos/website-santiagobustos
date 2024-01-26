import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <nav>
      <Link href={"/"}>
        <Image src="/icons/logo.png" alt="logo" width={48} height={48} className=""></Image>
      </Link>
    </nav>
  );
}
