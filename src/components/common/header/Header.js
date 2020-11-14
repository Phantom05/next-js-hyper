import Link from "next/link";
import styled from "@emotion/styled";
import { font } from "@/styles/_common";

export default function Header() {
  return (
    <Styled.Header>
      <>
        <Link href="/">
          <a className="header__link list">Home</a>
        </Link>
        <Link href="">
          <a className="header__link list">About</a>
        </Link>
        <Link href="">
          <a className="header__link list">Services</a>
        </Link>
        <Link href="">
          <a className="header__link list">Vision</a>
        </Link>
        <Link href="">
          <a className="header__link list">Project</a>
        </Link>
        <Link href="">
          <a className="header__link list">Contact</a>
        </Link>
      </>
      <div>
        <Link href="/auth/signin">
          <a>Signin</a>
        </Link>
      </div>
      <div>
        <Link href="/auth/signup">
          <a>Signup</a>
        </Link>
      </div>
    </Styled.Header>
  );
}

const Styled = {
  Header: styled.div`
    .list {
      ${font(16)};
      border: 1px solid red;
      padding: 5px;
    }
  `,
};
