import React from "react";

function Footer(props) {
  return (
    <>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
      <style jsx>{`
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
      `}</style>
    </>
  );
}

export default Footer;
