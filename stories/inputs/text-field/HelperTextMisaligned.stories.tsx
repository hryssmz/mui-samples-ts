// inputs/text-field/HelperTextMisaligned.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HelperTextMisalignedComponent from "../../../src/inputs/text-field/HelperTextMisaligned";

export default {
  component: HelperTextMisalignedComponent,
  title: "inputs/Text Field/Helper Text Misaligned",
} as ComponentMeta<typeof HelperTextMisalignedComponent>;

export const HelperTextMisaligned: ComponentStory<
  typeof HelperTextMisalignedComponent
> = () => <HelperTextMisalignedComponent />;
