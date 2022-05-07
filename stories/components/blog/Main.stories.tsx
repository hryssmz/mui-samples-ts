// components/blog/Main.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainComponent from "../../../src/components/blog/Main";

import post1 from "../../../src/components/blog/posts/blog-post.1.md?raw";
import post2 from "../../../src/components/blog/posts/blog-post.2.md?raw";
import post3 from "../../../src/components/blog/posts/blog-post.3.md?raw";

export default {
  component: MainComponent,
  title: "components/Blog/Main",
} as ComponentMeta<typeof MainComponent>;

const Template: ComponentStory<typeof MainComponent> = args => (
  <MainComponent {...args} />
);

export const Main = Template.bind({});
Main.args = {
  posts: [post1, post2, post3],
  title: "From the firehose",
};
