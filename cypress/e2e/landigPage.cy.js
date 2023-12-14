/// <reference types="cypress" />

import navBarLocators from "../selectors/navbar.css"

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC-01, Validate items in homepage", () => {
    cy.get(navBarLocators)
  });
});
