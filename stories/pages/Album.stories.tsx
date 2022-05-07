// pages/Album.stories.tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlbumPage from "../../src/pages/Album";

export default {
  component: AlbumPage,
  title: "pages/Album",
} as ComponentMeta<typeof AlbumPage>;

export const Album: ComponentStory<typeof AlbumPage> = () => <AlbumPage />;
