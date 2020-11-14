import Link from "next/link";
export default function Header() {
  return (
    <>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about/company">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="">
          <a>Services</a>
        </Link>
      </div>
      <div>
        <Link href="">
          <a>Vision</a>
        </Link>
      </div>
      <div>
        <Link href="">
          <a>Project</a>
        </Link>
      </div>
      <div>
        <Link href="">
          <a>Contact</a>
        </Link>
      </div>
    </>
  );
}
