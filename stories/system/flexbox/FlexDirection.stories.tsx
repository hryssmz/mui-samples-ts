// system/flexbox/FlexDirection.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FlexDirectionComponent from "../../../src/system/flexbox/FlexDirection";

export default {
  component: FlexDirectionComponent,
  title: "system/Flexbox/Flex Direction",
} as ComponentMeta<typeof FlexDirectionComponent>;

export const FlexDirection: ComponentStory<
  typeof FlexDirectionComponent
> = () => <FlexDirectionComponent />;
