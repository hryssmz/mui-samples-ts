// system/demo/StyledWhy.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StyledWhyComponent from "../../../src/system/demo/StyledWhy";

export default {
  component: StyledWhyComponent,
  title: "system/Demo/Styled Why",
} as ComponentMeta<typeof StyledWhyComponent>;

export const StyledWhy: ComponentStory<typeof StyledWhyComponent> = () => (
  <StyledWhyComponent />
);
