// data-display/typography/Types.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TypesComponent from "../../../src/data-display/typography/Types";

export default {
  component: TypesComponent,
  title: "data-display/Typography/Types",
} as ComponentMeta<typeof TypesComponent>;

export const Types: ComponentStory<typeof TypesComponent> = () => (
  <TypesComponent />
);
