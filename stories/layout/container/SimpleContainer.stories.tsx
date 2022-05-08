// layout/container/SimpleContainer.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SimpleContainerComponent from "../../../src/layout/container/SimpleContainer";

export default {
  component: SimpleContainerComponent,
  title: "layout/Container/Simple Container",
} as ComponentMeta<typeof SimpleContainerComponent>;

export const SimpleContainer: ComponentStory<
  typeof SimpleContainerComponent
> = () => <SimpleContainerComponent />;
