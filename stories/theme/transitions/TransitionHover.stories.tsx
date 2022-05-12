// theme/transitions/TransitionHover.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TransitionHoverComponent from "../../../src/theme/transitions/TransitionHover";

export default {
  component: TransitionHoverComponent,
  title: "theme/Transitions/Transition Hover",
} as ComponentMeta<typeof TransitionHoverComponent>;

export const TransitionHover: ComponentStory<
  typeof TransitionHoverComponent
> = () => <TransitionHoverComponent />;
