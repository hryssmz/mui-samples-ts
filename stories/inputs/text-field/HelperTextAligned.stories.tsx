// inputs/text-field/HelperTextAligned.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HelperTextAlignedComponent from "../../../src/inputs/text-field/HelperTextAligned";

export default {
  component: HelperTextAlignedComponent,
  title: "inputs/Text Field/Helper Text Aligned",
} as ComponentMeta<typeof HelperTextAlignedComponent>;

export const HelperTextAligned: ComponentStory<
  typeof HelperTextAlignedComponent
> = () => <HelperTextAlignedComponent />;
