// system/flexbox/AlignItems.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlignItemsComponent from "../../../src/system/flexbox/AlignItems";

export default {
  component: AlignItemsComponent,
  title: "system/Flexbox/Align Items",
} as ComponentMeta<typeof AlignItemsComponent>;

export const AlignItems: ComponentStory<typeof AlignItemsComponent> = () => (
  <AlignItemsComponent />
);
