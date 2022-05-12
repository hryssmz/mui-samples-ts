// system/box/BoxComponent.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BoxComponentComponent from "../../../src/system/box/BoxComponent";

export default {
  component: BoxComponentComponent,
  title: "system/Box/Box Component",
} as ComponentMeta<typeof BoxComponentComponent>;

export const BoxComponent: ComponentStory<
  typeof BoxComponentComponent
> = () => <BoxComponentComponent />;
