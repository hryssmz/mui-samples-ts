// system/sx/Example.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExampleComponent from "../../../src/system/sx/Example";

export default {
  component: ExampleComponent,
  title: "system/Sx/Example",
} as ComponentMeta<typeof ExampleComponent>;

export const Example: ComponentStory<typeof ExampleComponent> = () => (
  <ExampleComponent />
);
