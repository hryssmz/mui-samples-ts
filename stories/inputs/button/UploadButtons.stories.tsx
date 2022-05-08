// inputs/button/UploadButtons.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import UploadButtonsComponent from "../../../src/inputs/button/UploadButtons";

export default {
  component: UploadButtonsComponent,
  title: "inputs/Button/Upload Buttons",
} as ComponentMeta<typeof UploadButtonsComponent>;

export const UploadButtons: ComponentStory<
  typeof UploadButtonsComponent
> = () => <UploadButtonsComponent />;
