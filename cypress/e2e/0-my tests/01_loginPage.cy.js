import loginPageSelectors from "../../selectors/loginSignupFields.css";
import navPageSelectors from "../../selectors/navigationFields.css";
import { e2e } from "../../../cypress.config";

describe("LoginPage", () => {
  it("Validate Error Message", () => {
    cy.visit(e2e.baseUrl);
  });
});
