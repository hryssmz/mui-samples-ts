// feedback/dialog/AlertDialogSlide.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertDialogSlideComponent from "../../../src/feedback/dialog/AlertDialogSlide";

export default {
  component: AlertDialogSlideComponent,
  title: "feedback/Dialog/Alert Dialog Slide",
} as ComponentMeta<typeof AlertDialogSlideComponent>;

export const AlertDialogSlide: ComponentStory<
  typeof AlertDialogSlideComponent
> = () => <AlertDialogSlideComponent />;
