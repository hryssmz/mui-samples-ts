// feedback/dialog/FormDialog.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormDialogComponent from "../../../src/feedback/dialog/FormDialog";

export default {
  component: FormDialogComponent,
  title: "feedback/Dialog/Form Dialog",
} as ComponentMeta<typeof FormDialogComponent>;

export const FormDialog: ComponentStory<typeof FormDialogComponent> = () => (
  <FormDialogComponent />
);
