// inputs/button/LoadingButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoadingButtonsComponent from "../../../src/inputs/button/LoadingButtons";

export default {
  component: LoadingButtonsComponent,
  title: "inputs/Button/Loading Buttons",
} as ComponentMeta<typeof LoadingButtonsComponent>;

export const LoadingButtons: ComponentStory<
  typeof LoadingButtonsComponent
> = () => <LoadingButtonsComponent />;
