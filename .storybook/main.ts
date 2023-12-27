import type { StorybookConfig } from "@storybook/nextjs";
import type { Configuration } from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
     name: "@storybook/addon-styling",
     options: {
       postCss: true,
     },
   },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config:Configuration) => {
    const plugins = [new TsconfigPathsPlugin()];

    if (!config.resolve) {
      config.resolve = {
        plugins: []
      }
    }

    config.resolve.plugins = plugins;

    return config;
  },
};






export default config;
