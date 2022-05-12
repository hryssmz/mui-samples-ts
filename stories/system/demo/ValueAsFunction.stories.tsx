// system/demo/ValueAsFunction.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ValueAsFunctionComponent from "../../../src/system/demo/ValueAsFunction";

export default {
  component: ValueAsFunctionComponent,
  title: "system/Demo/Value As Function",
} as ComponentMeta<typeof ValueAsFunctionComponent>;

export const ValueAsFunction: ComponentStory<
  typeof ValueAsFunctionComponent
> = () => <ValueAsFunctionComponent />;
