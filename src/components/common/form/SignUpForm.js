import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "@emotion/styled";

function SignUpForm() {
  return (
    <Styled.SignUpForm>
      <form noValidate autoComplete="off" className="signup__form">
        <TextField
          label="email"
          id="standard-size-small"
          defaultValue=""
          size="small"
          fullWidth
        />
        <br />
        <TextField
          label="name"
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
        <br />
        <TextField
          label="re-password"
          id="standard-size-small"
          defaultValue=""
          size="small"
          fullWidth
        />
        <br />
        <TextField
          label="phone"
          id="standard-size-small"
          defaultValue=""
          size="small"
          fullWidth
        />

        <div className="signup__row btn">
          <Button variant="contained" color="primary" fullWidth>
            Create
          </Button>
        </div>
      </form>
      <div className="signup__row login">
        <Link href="/auth/signin">
          <a>Go to Login</a>
        </Link>
      </div>
    </Styled.SignUpForm>
  );
}

const Styled = {
  SignUpForm: styled.div`
    display: inline-block;
    width: 100%;
    .signup__form {
    }
    .signup__row {
      &.btn {
        margin-top: 20px;
      }
      &.login {
        margin-top: 20px;
      }
    }
  `,
};

export default SignUpForm;
