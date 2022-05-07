// pages/Blog.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BlogPage from "../../src/pages/Blog";

export default {
  component: BlogPage,
  title: "pages/Blog",
} as ComponentMeta<typeof BlogPage>;

export const Blog: ComponentStory<typeof BlogPage> = () => <BlogPage />;
