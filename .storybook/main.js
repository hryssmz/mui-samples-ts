module.exports = {
  stories: [
    // src
    "../stories/App.stories.tsx",
    // src/components
    "../stories/components/blog/*.stories.tsx",
    "../stories/components/checkout/*.stories.tsx",
    "../stories/components/dashboard/*.stories.tsx",
    "../stories/components/*.stories.tsx",
    // src/data-display
    "../stories/data-display/typography/*.stories.tsx",
    // src/feedback
    "../stories/feedback/alert/*.stories.tsx",
    "../stories/feedback/dialog/*.stories.tsx",
    // src/inputs
    "../stories/inputs/button/*.stories.tsx",
    "../stories/inputs/text-field/*.stories.tsx",
    // src/layout
    "../stories/layout/box/*.stories.tsx",
    "../stories/layout/container/*.stories.tsx",
    "../stories/layout/grid/*.stories.tsx",
    // src/pages
    "../stories/pages/*.stories.tsx",
    // src/system
    "../stories/system/borders/*.stories.tsx",
    "../stories/system/box/*.stories.tsx",
    "../stories/system/demo/*.stories.tsx",
    "../stories/system/display/*.stories.tsx",
    "../stories/system/flexbox/*.stories.tsx",
    "../stories/system/grid/*.stories.tsx",
    "../stories/system/palette/*.stories.tsx",
    "../stories/system/positions/*.stories.tsx",
    "../stories/system/screenreaders/*.stories.tsx",
    "../stories/system/shadows/*.stories.tsx",
    "../stories/system/sizing/*.stories.tsx",
    "../stories/system/spacing/*.stories.tsx",
    "../stories/system/styled/*.stories.tsx",
    "../stories/system/sx/*.stories.tsx",
    "../stories/system/typography/*.stories.tsx",
    // src/theme
    "../stories/theme/components/*.stories.tsx",
    "../stories/theme/customization/*.stories.tsx",
    "../stories/theme/darktheme/*.stories.tsx",
    "../stories/theme/mediaquery/*.stories.tsx",
    "../stories/theme/palette/*.stories.tsx",
    "../stories/theme/transitions/*.stories.tsx",
    "../stories/theme/typography/*.stories.tsx",
    // src/utils
    "../stories/utils/useMediaQuery/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
