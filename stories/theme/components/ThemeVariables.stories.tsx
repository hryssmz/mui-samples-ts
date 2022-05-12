// theme/components/ThemeVariables.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ThemeVariablesComponent from "../../../src/theme/components/ThemeVariables";

export default {
  component: ThemeVariablesComponent,
  title: "theme/Components/Theme Variables",
} as ComponentMeta<typeof ThemeVariablesComponent>;

export const ThemeVariables: ComponentStory<
  typeof ThemeVariablesComponent
> = () => <ThemeVariablesComponent />;
