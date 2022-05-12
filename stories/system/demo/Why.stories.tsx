// system/demo/Why.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WhyComponent from "../../../src/system/demo/Why";

export default {
  component: WhyComponent,
  title: "system/Demo/Why",
} as ComponentMeta<typeof WhyComponent>;

export const Why: ComponentStory<typeof WhyComponent> = () => <WhyComponent />;
