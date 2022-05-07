// components/blog/Header.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderComponent from "../../../src/components/blog/Header";

export default {
  component: HeaderComponent,
  title: "components/Blog/Header",
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = args => (
  <HeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
  sections: [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
  ],
  title: "Blog",
};
