import { mount } from "@vue/test-utils";
import Home from "@/pages/Home.vue";

it("renders Home", () => {
  const wrapper = mount(Home);

  const home = wrapper.get("h1");

  expect(home.text()).toBe("Home");
});
