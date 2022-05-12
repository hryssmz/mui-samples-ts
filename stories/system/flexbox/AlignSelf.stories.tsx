// system/flexbox/AlignSelf.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlignSelfComponent from "../../../src/system/flexbox/AlignSelf";

export default {
  component: AlignSelfComponent,
  title: "system/Flexbox/Align Self",
} as ComponentMeta<typeof AlignSelfComponent>;

export const AlignSelf: ComponentStory<typeof AlignSelfComponent> = () => (
  <AlignSelfComponent />
);
