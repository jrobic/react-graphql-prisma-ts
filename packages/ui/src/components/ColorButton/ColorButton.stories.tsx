/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import ColorButton, { Colors } from ".";

storiesOf("Button", module).add("Color Button Example", () => {
  const colors: Colors[] = ["blue", "green", "orange"];
  return <ColorButton color={select("Color", colors, "orange")} />;
});
