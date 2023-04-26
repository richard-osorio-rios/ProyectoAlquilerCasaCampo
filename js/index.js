'use strict';

import header from "./modules/header.js";
import slider from "./modules/slider.js";

const documentReady = () => {
  header();
  slider();
  //sectionNosotros();
};

document.addEventListener('DOMContentLoaded', documentReady);