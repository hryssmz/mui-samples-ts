// feedback/dialog/AlertDialog.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertDialogComponent from "../../../src/feedback/dialog/AlertDialog";

export default {
  component: AlertDialogComponent,
  title: "feedback/Dialog/Alert Dialog",
} as ComponentMeta<typeof AlertDialogComponent>;

export const AlertDialog: ComponentStory<typeof AlertDialogComponent> = () => (
  <AlertDialogComponent />
);
