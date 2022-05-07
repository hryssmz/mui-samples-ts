// pages/SignInSide.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SignInSidePage from "../../src/pages/SignInSide";

export default {
  component: SignInSidePage,
  title: "pages/Sign In Side",
} as ComponentMeta<typeof SignInSidePage>;

export const SignInSide: ComponentStory<typeof SignInSidePage> = () => (
  <SignInSidePage />
);
