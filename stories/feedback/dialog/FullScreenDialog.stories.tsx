// feedback/dialog/FullScreenDialog.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FullScreenDialogComponent from "../../../src/feedback/dialog/FullScreenDialog";

export default {
  component: FullScreenDialogComponent,
  title: "feedback/Dialog/Full Screen Dialog",
} as ComponentMeta<typeof FullScreenDialogComponent>;

export const FullScreenDialog: ComponentStory<
  typeof FullScreenDialogComponent
> = () => <FullScreenDialogComponent />;
