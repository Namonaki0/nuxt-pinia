// mycomponent.spec.js

import { mount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";

describe("MyComponent", () => {
  test("renders correctly", () => {
    const wrapper = mount(ProductCard);
    expect(wrapper.text()).toContain("Add to basket");
  });
});
