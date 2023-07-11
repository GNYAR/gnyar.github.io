import routes from "@/routes";
import { map, prop } from "lodash/fp";
import { expect } from "vitest";

describe("routes", () => {
  const names = ["home", "not found"];
  const paths = ["/", "/:catchAll(.*)"];

  it("check names", () => {
    expect(map(prop("name"), routes)).toEqual(names);
  });

  it("check paths", () => {
    expect(map(prop("path"), routes)).toEqual(paths);
  });
});
