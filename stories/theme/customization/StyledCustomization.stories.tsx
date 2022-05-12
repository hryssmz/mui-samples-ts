// theme/customization/StyledCustomization.stories.ttypography
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StyledCustomizationComponent from "../../../src/theme/customization/StyledCustomization";

export default {
  component: StyledCustomizationComponent,
  title: "theme/Customization/Styled Customization",
} as ComponentMeta<typeof StyledCustomizationComponent>;

export const StyledCustomization: ComponentStory<
  typeof StyledCustomizationComponent
> = () => <StyledCustomizationComponent />;
