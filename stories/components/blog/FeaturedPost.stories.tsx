// components/blog/FeaturedPost.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FeaturedPostComponent from "../../../src/components/blog/FeaturedPost";

export default {
  component: FeaturedPostComponent,
  title: "components/Blog/Featured Post",
} as ComponentMeta<typeof FeaturedPostComponent>;

const Template: ComponentStory<typeof FeaturedPostComponent> = args => (
  <FeaturedPostComponent {...args} />
);

export const FeaturedPost = Template.bind({});
FeaturedPost.args = {
  post: {
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
    title: "Featured post",
  },
};
