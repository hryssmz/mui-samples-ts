// pages/SignUp.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SignUpPage from "../../src/pages/SignUp";

export default {
  component: SignUpPage,
  title: "pages/Sign Up",
} as ComponentMeta<typeof SignUpPage>;

export const SignUp: ComponentStory<typeof SignUpPage> = () => <SignUpPage />;
