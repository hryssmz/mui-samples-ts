// feedback/dialog/ConfirmationDialog.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfirmationDialogComponent from "../../../src/feedback/dialog/ConfirmationDialog";

export default {
  component: ConfirmationDialogComponent,
  title: "feedback/Dialog/Confirmation Dialog",
} as ComponentMeta<typeof ConfirmationDialogComponent>;

export const ConfirmationDialog: ComponentStory<
  typeof ConfirmationDialogComponent
> = () => <ConfirmationDialogComponent />;
