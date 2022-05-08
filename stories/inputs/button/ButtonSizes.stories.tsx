// inputs/button/ButtonSizes.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonSizesComponent from "../../../src/inputs/button/ButtonSizes";

export default {
  component: ButtonSizesComponent,
  title: "inputs/Button/Button Sizes",
} as ComponentMeta<typeof ButtonSizesComponent>;

export const ButtonSizes: ComponentStory<typeof ButtonSizesComponent> = () => (
  <ButtonSizesComponent />
);
