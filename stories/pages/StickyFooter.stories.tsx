// pages/StickyFooter.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StickyFooterPage from "../../src/pages/StickyFooter";

export default {
  component: StickyFooterPage,
  title: "pages/Sticky Footer",
} as ComponentMeta<typeof StickyFooterPage>;

export const StickyFooter: ComponentStory<typeof StickyFooterPage> = () => (
  <StickyFooterPage />
);
