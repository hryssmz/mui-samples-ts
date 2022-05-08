// data-display/typography/TypographyTheme.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TypographyThemeComponent from "../../../src/data-display/typography/TypographyTheme";

export default {
  component: TypographyThemeComponent,
  title: "data-display/Typography/Typography Theme",
} as ComponentMeta<typeof TypographyThemeComponent>;

export const TypographyTheme: ComponentStory<
  typeof TypographyThemeComponent
> = () => <TypographyThemeComponent />;
