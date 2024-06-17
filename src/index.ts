import {App, Plugin} from 'vue';

import "../style.css";
import {default as libComponent} from './lib-components/LktBannerBox.vue';

const LktBannerBox: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-banner-box') === undefined) app.component('lkt-banner-box', libComponent);
  }
};

export default LktBannerBox;
