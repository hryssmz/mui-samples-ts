// layout/container/FixedContainer.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FixedContainerComponent from "../../../src/layout/container/FixedContainer";

export default {
  component: FixedContainerComponent,
  title: "layout/Container/Fixed Container",
} as ComponentMeta<typeof FixedContainerComponent>;

export const FixedContainer: ComponentStory<
  typeof FixedContainerComponent
> = () => <FixedContainerComponent />;
