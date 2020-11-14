import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "@emotion/styled";

function SignInForm(props) {
  return (
    <Styled.SignInForm>
      <form noValidate autoComplete="off">
        <TextField
          label="email"
          id="standard-size-small"
          defaultValue=""
          size="small"
          fullWidth
        />
        <br />
        <TextField
          label="password"
          id="standard-size-small"
          defaultValue=""
          size="small"
          fullWidth
        />
        <div className="signin__row btn">
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </div>
      </form>

      <div className="signin__row account">
        <Link href="/auth/signup">
          <a>Create Account</a>
        </Link>
      </div>

      <div className="signin__row forget">
        <Link href="/auth/reset_password">
          <a>Forget Password</a>
        </Link>
      </div>
    </Styled.SignInForm>
  );
}

const Styled = {
  SignInForm: styled.div`
    display: inline-block;
    width: 100%;
    .signin__row {
      &.account,
      &.btn {
        margin-top: 20px;
      }
      &.forget {
        margin-top: 10px;
      }
    }
  `,
};

export default SignInForm;
