// system/flexbox/AlignContent.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlignContentComponent from "../../../src/system/flexbox/AlignContent";

export default {
  component: AlignContentComponent,
  title: "system/Flexbox/Align Content",
} as ComponentMeta<typeof AlignContentComponent>;

export const AlignContent: ComponentStory<
  typeof AlignContentComponent
> = () => <AlignContentComponent />;
