// system/styled/ExperimentalSx.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExperimentalSxComponent from "../../../src/system/styled/ExperimentalSx";

export default {
  component: ExperimentalSxComponent,
  title: "system/Styled/Experimental Sx",
} as ComponentMeta<typeof ExperimentalSxComponent>;

export const ExperimentalSx: ComponentStory<
  typeof ExperimentalSxComponent
> = () => <ExperimentalSxComponent />;
