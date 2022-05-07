// components/dashboard/SecondaryListItems.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SecondaryListItemsComponent from "../../../src/components/dashboard/SecondaryListItems";

export default {
  component: SecondaryListItemsComponent,
  title: "components/Dashboard/Secondary List Items",
} as ComponentMeta<typeof SecondaryListItemsComponent>;

export const SecondaryListItems: ComponentStory<
  typeof SecondaryListItemsComponent
> = () => <SecondaryListItemsComponent />;
