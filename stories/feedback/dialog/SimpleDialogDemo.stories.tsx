// feedback/dialog/SimpleDialogDemo.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SimpleDialogDemoComponent from "../../../src/feedback/dialog/SimpleDialogDemo";

export default {
  component: SimpleDialogDemoComponent,
  title: "feedback/Dialog/Simple Dialog Demo",
} as ComponentMeta<typeof SimpleDialogDemoComponent>;

export const SimpleDialogDemo: ComponentStory<
  typeof SimpleDialogDemoComponent
> = () => <SimpleDialogDemoComponent />;
