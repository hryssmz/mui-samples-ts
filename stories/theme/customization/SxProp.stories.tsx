// theme/customization/SxProp.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SxPropComponent from "../../../src/theme/customization/SxProp";

export default {
  component: SxPropComponent,
  title: "theme/Customization/Sx Prop",
} as ComponentMeta<typeof SxPropComponent>;

export const SxProp: ComponentStory<typeof SxPropComponent> = () => (
  <SxPropComponent />
);
