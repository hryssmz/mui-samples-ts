// theme/mediaquery/MediaQuery.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MediaQueryComponent from "../../../src/theme/mediaquery/MediaQuery";

export default {
  component: MediaQueryComponent,
  title: "theme/Mediaquery/Media Query",
} as ComponentMeta<typeof MediaQueryComponent>;

export const MediaQuery: ComponentStory<typeof MediaQueryComponent> = () => (
  <MediaQueryComponent />
);
