// system/styled/UsingOptions.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import UsingOptionsComponent from "../../../src/system/styled/UsingOptions";

export default {
  component: UsingOptionsComponent,
  title: "system/Styled/Using Options",
} as ComponentMeta<typeof UsingOptionsComponent>;

export const UsingOptions: ComponentStory<
  typeof UsingOptionsComponent
> = () => <UsingOptionsComponent />;
