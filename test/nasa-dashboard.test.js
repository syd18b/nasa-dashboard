import { html, fixture, expect } from '@open-wc/testing';
import "../nasa-dashboard.js";

describe("nasaDashboard test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nasa-dashboard
        title="title"
      ></nasa-dashboard>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
