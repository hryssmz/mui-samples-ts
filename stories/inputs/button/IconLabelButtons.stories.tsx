// inputs/button/IconLabelButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconLabelButtonsComponent from "../../../src/inputs/button/IconLabelButtons";

export default {
  component: IconLabelButtonsComponent,
  title: "inputs/Button/Icon Label Buttons",
} as ComponentMeta<typeof IconLabelButtonsComponent>;

export const IconLabelButtons: ComponentStory<
  typeof IconLabelButtonsComponent
> = () => <IconLabelButtonsComponent />;
