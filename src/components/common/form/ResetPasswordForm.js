import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "@emotion/styled";

function ResetPasswordForm(props) {
  return (
    <Styled.ResetPasswordForm>
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
          label="vaildation code"
          id="standard-size-small"
          defaultValue=""
          size="small"
          fullWidth
        />
        <div className="reset__row btn">
          <Button variant="contained" color="primary" fullWidth>
            OK
          </Button>
        </div>
      </form>

      <div className="reset__row account">
        <Link href="/auth/signup">
          <a>Create Account</a>
        </Link>
      </div>

      <div className="reset__row forget">
        <Link href="/auth/signin">
          <a>Go to Login</a>
        </Link>
      </div>
    </Styled.ResetPasswordForm>
  );
}

const Styled = {
  ResetPasswordForm: styled.div`
    display: inline-block;
    width: 100%;
    .reset__row {
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

export default ResetPasswordForm;
