// feedback/dialog/CustomizedDialogs.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomizedDialogsComponent from "../../../src/feedback/dialog/CustomizedDialogs";

export default {
  component: CustomizedDialogsComponent,
  title: "feedback/Dialog/Customized Dialogs",
} as ComponentMeta<typeof CustomizedDialogsComponent>;

export const CustomizedDialogs: ComponentStory<
  typeof CustomizedDialogsComponent
> = () => <CustomizedDialogsComponent />;
