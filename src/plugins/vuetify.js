import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const customLight = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#028C6A",
    "primary-darken-1": "#025F48",
    secondary: "#DB6B8B",
    "secondary-darken-1": "#BB3A5E",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customLight",
    themes: {
      customLight,
    },
  },
});
