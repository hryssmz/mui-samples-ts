// system/grid/Gap.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GapComponent from "../../../src/system/grid/Gap";

export default {
  component: GapComponent,
  title: "system/Grid/Gap",
} as ComponentMeta<typeof GapComponent>;

export const Gap: ComponentStory<typeof GapComponent> = () => <GapComponent />;
