// feedback/dialog/ScrollDialog.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ScrollDialogComponent from "../../../src/feedback/dialog/ScrollDialog";

export default {
  component: ScrollDialogComponent,
  title: "feedback/Dialog/Scroll Dialog",
} as ComponentMeta<typeof ScrollDialogComponent>;

export const ScrollDialog: ComponentStory<
  typeof ScrollDialogComponent
> = () => <ScrollDialogComponent />;
