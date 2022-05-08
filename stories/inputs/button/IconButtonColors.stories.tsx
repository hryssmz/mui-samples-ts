// inputs/button/IconButtonColors.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButtonColorsComponent from "../../../src/inputs/button/IconButtonColors";

export default {
  component: IconButtonColorsComponent,
  title: "inputs/Button/Icon Button Colors",
} as ComponentMeta<typeof IconButtonColorsComponent>;

export const IconButtonColors: ComponentStory<
  typeof IconButtonColorsComponent
> = () => <IconButtonColorsComponent />;
