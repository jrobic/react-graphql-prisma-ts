import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS }, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: DEFAULT_VIEWPORT
  }
});

addDecorator(
  withInfo({ inline: false })
);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);

