import popupVue from "./popup.vue";
import Equal from "equal-vue";
import { createApp } from "vue";

const popup = {
  open: ({ header }) => {
    const tempDiv = document.createElement("div");
    const instance = createApp(popupVue, { header: header })
      .use(Equal)
      .mount(tempDiv);
    document.body.appendChild(instance.$el);
  },
};

export default popup;
