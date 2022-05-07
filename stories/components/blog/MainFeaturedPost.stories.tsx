// components/blog/MainFeaturedPost.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainFeaturedPostComponent from "../../../src/components/blog/MainFeaturedPost";

export default {
  component: MainFeaturedPostComponent,
  title: "components/Blog/Main Featured Post",
} as ComponentMeta<typeof MainFeaturedPostComponent>;

const Template: ComponentStory<typeof MainFeaturedPostComponent> = args => (
  <MainFeaturedPostComponent {...args} />
);

export const MainFeaturedPost = Template.bind({});
MainFeaturedPost.args = {
  post: {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Continue reading…",
  },
};
