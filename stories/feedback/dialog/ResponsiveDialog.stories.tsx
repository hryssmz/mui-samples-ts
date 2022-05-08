// feedback/dialog/ResponsiveDialog.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ResponsiveDialogComponent from "../../../src/feedback/dialog/ResponsiveDialog";

export default {
  component: ResponsiveDialogComponent,
  title: "feedback/Dialog/Responsive Dialog",
} as ComponentMeta<typeof ResponsiveDialogComponent>;

export const ResponsiveDialog: ComponentStory<
  typeof ResponsiveDialogComponent
> = () => <ResponsiveDialogComponent />;
