// components/blog/Footer.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FooterComponent from "../../../src/components/blog/Footer";

export default {
  component: FooterComponent,
  title: "components/Blog/Footer",
} as ComponentMeta<typeof FooterComponent>;

const Template: ComponentStory<typeof FooterComponent> = args => (
  <FooterComponent {...args} />
);

export const Footer = Template.bind({});
Footer.args = {
  description: "Something here to give the footer a purpose!",
  title: "Footer",
};
