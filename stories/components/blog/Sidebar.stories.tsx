// components/blog/Sidebar.stories.tsx
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SidebarComponent from "../../../src/components/blog/Sidebar";

export default {
  component: SidebarComponent,
  title: "components/Blog/Sidebar",
} as ComponentMeta<typeof SidebarComponent>;

const Template: ComponentStory<typeof SidebarComponent> = args => (
  <SidebarComponent {...args} />
);

export const Sidebar = Template.bind({});
Sidebar.args = {
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
  title: "Title of a longer featured blog post",
};
