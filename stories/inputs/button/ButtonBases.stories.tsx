// inputs/button/ButtonBases.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonBasesComponent from "../../../src/inputs/button/ButtonBases";

export default {
  component: ButtonBasesComponent,
  title: "inputs/Button/Button Bases",
} as ComponentMeta<typeof ButtonBasesComponent>;

export const ButtonBases: ComponentStory<typeof ButtonBasesComponent> = () => (
  <ButtonBasesComponent />
);
