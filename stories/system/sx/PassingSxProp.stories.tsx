// system/sx/PassingSxProp.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PassingSxPropComponent from "../../../src/system/sx/PassingSxProp";

export default {
  component: PassingSxPropComponent,
  title: "system/Sx/Passing Sx Prop",
} as ComponentMeta<typeof PassingSxPropComponent>;

export const PassingSxProp: ComponentStory<
  typeof PassingSxPropComponent
> = () => <PassingSxPropComponent />;
