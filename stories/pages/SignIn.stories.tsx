// pages/SignIn.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SignInPage from "../../src/pages/SignIn";

export default {
  component: SignInPage,
  title: "pages/Sign In",
} as ComponentMeta<typeof SignInPage>;

export const SignIn: ComponentStory<typeof SignInPage> = () => <SignInPage />;
