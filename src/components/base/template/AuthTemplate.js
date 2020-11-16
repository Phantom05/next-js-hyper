import styled from "@emotion/styled";
import { color, font } from "@/styles/_common";
function AuthTemplate(props) {
  const { title = "", children = "", footer = "", width = "" } = props;
  return (
    <Styled.AuthTemplate width={width}>
      {children && (
        <div className="auth__container">
          {title && <h1 className="auth__title">{title}</h1>}
          {children}
        </div>
      )}
      {footer && <div className="footer__bottom_section">{footer}</div>}
    </Styled.AuthTemplate>
  );
}

const Styled = {
  AuthTemplate: styled.div`
    text-align: center;
    .auth__container {
      padding: 5px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: ${({ width }) => (width ? width : 0)}px;
    }
    .auth__title {
      font-weight: bold;
      ${font(40, color.black_font)};
      margin-bottom: 40px;
    }
    .footer__bottom_section {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  `,
};

export default AuthTemplate;
