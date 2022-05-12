// system/spacing/HorizontalCentering.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HorizontalCenteringComponent from "../../../src/system/spacing/HorizontalCentering";

export default {
  component: HorizontalCenteringComponent,
  title: "system/Spacing/Horizontal Centering",
} as ComponentMeta<typeof HorizontalCenteringComponent>;

export const HorizontalCentering: ComponentStory<
  typeof HorizontalCenteringComponent
> = () => <HorizontalCenteringComponent />;
