module.exports = {
  stories: [
    "../stories/storybook/*.stories.mdx",
    "../stories/storybook/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
