// feedback/dialog/MaxWidthDialog.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MaxWidthDialogComponent from "../../../src/feedback/dialog/MaxWidthDialog";

export default {
  component: MaxWidthDialogComponent,
  title: "feedback/Dialog/Max Width Dialog",
} as ComponentMeta<typeof MaxWidthDialogComponent>;

export const MaxWidthDialog: ComponentStory<
  typeof MaxWidthDialogComponent
> = () => <MaxWidthDialogComponent />;
