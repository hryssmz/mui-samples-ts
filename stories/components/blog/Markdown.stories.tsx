// components/blog/Markdown.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MarkdownComponent from "../../../src/components/blog/Markdown";

import post from "../../../src/components/blog/posts/blog-post.1.md?raw";

export default {
  component: MarkdownComponent,
  title: "components/Blog/Markdown",
} as ComponentMeta<typeof MarkdownComponent>;

const Template: ComponentStory<typeof MarkdownComponent> = args => (
  <MarkdownComponent {...args} />
);

export const Markdown = Template.bind({});
Markdown.args = {
  children: post,
};
