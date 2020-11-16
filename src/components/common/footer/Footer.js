import React from "react";
import styled from "@emotion/styled";

function Footer(props) {
  return (
    <Styled.Footer>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className="footer__author_name">HYPERCOX</span>
        </a>
      </footer>
      {/* <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        footer img {
          margin-left: 0.5rem;
          width: 70px;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style> */}
    </Styled.Footer>
  );
}

const Styled = {
  Footer: styled.footer`
    footer {
      width: 100%;
      height: 100px;
      border-top: 1px solid #eaeaea;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }

    .footer__author_name {
      display: inline-block;
      margin-left: 10px;
      font-weight: bold;
      font-size: 13px;
    }
  `,
};
export default Footer;
