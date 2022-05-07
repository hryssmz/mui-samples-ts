// components/dashboard/MainListItems.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainListItemsComponent from "../../../src/components/dashboard/MainListItems";

export default {
  component: MainListItemsComponent,
  title: "components/Dashboard/Main List Items",
} as ComponentMeta<typeof MainListItemsComponent>;

export const MainListItems: ComponentStory<
  typeof MainListItemsComponent
> = () => <MainListItemsComponent />;
