// theme/typography/CustomResponsiveFontSizes.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomResponsiveFontSizesComponent from "../../../src/theme/typography/CustomResponsiveFontSizes";

export default {
  component: CustomResponsiveFontSizesComponent,
  title: "theme/Typography/Custom Responsive Font Sizes",
} as ComponentMeta<typeof CustomResponsiveFontSizesComponent>;

export const CustomResponsiveFontSizes: ComponentStory<
  typeof CustomResponsiveFontSizesComponent
> = () => <CustomResponsiveFontSizesComponent />;
