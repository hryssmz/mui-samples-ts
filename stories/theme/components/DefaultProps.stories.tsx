// theme/components/DefaultProps.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DefaultPropsComponent from "../../../src/theme/components/DefaultProps";

export default {
  component: DefaultPropsComponent,
  title: "theme/Components/Default Props",
} as ComponentMeta<typeof DefaultPropsComponent>;

export const DefaultProps: ComponentStory<
  typeof DefaultPropsComponent
> = () => <DefaultPropsComponent />;
