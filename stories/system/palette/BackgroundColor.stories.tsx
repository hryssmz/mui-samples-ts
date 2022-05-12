// system/palette/BackgroundColor.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BackgroundColorComponent from "../../../src/system/palette/BackgroundColor";

export default {
  component: BackgroundColorComponent,
  title: "system/Palette/Background Color",
} as ComponentMeta<typeof BackgroundColorComponent>;

export const BackgroundColor: ComponentStory<
  typeof BackgroundColorComponent
> = () => <BackgroundColorComponent />;
