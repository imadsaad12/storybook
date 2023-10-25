// Button.stories.js
import React from "react";

import Button from "../components/Buttons/Button";
import { bool } from "prop-types";

export default {
  title: "Buttons",
};

const Template = (args) => <Button {...args} />;
const Template2 = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button (Default)", // Default label value
  backgroundColor: "red",
};

export const Primary2 = Template2.bind({});
Primary2.args = {
  label: "Primary Button (Default)", // Default label value
  backgroundColor: "red",
};
