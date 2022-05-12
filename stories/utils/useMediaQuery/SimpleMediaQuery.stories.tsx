// utils/useMediaQuery/SimpleMediaQuery.stories.tunstyled
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SimpleMediaQueryComponent from "../../../src/utils/useMediaQuery/SimpleMediaQuery";

export default {
  component: SimpleMediaQueryComponent,
  title: "utils/useMediaQuery/Simple Media Query",
} as ComponentMeta<typeof SimpleMediaQueryComponent>;

export const SimpleMediaQuery: ComponentStory<
  typeof SimpleMediaQueryComponent
> = () => <SimpleMediaQueryComponent />;
