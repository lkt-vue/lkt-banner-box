import {App, Plugin} from 'vue';

import "../style.css";
import {default as libComponent} from './lib-components/LktBannerBox.vue';

const LktBanner: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-banner') === undefined) app.component('lkt-banner', libComponent);
  }
};

export default LktBanner;
