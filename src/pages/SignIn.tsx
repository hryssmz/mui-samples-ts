// pages/SignIn.tsx
// https://mui.com/getting-started/templates/sign-in/
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/sign-in/SignIn.tsx
import { FormEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Copyright from "../components/Copyright";

export default function SignIn() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          mt: 8,
          display: "flex", // https://mui.com/system/flexbox/#display
          flexDirection: "column", // https://mui.com/system/flexbox/#flex-direction
          alignItems: "center", // https://mui.com/system/flexbox/#align-items
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* https://mui.com/system/box/#overriding-mui-components */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth // https://mui.com/components/text-fields/#full-width
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email" // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* https://mui.com/components/Checkboxes/#label */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth // https://mui.com/api/button/#props
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {/* https://mui.com/components/grid/#auto-layout */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
