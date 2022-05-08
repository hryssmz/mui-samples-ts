// inputs/button/DisableElevation.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DisableElevationComponent from "../../../src/inputs/button/DisableElevation";

export default {
  component: DisableElevationComponent,
  title: "inputs/Button/Disable Elevation",
} as ComponentMeta<typeof DisableElevationComponent>;

export const DisableElevation: ComponentStory<
  typeof DisableElevationComponent
> = () => <DisableElevationComponent />;
