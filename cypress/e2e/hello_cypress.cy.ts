describe("Album Catalog - Basic Checks", () => {
    it("opens the homepage", () => {
        cy.visit("/");

        // make this test pass by adding the correct attribute data-cy into your page
        cy.get('[data-cy="title"]').should("be.visible");
        cy.get('[data-cy="title"]').should("contain.text", "Spotify");
    });

    it("displays the site title in the header", () => {
        cy.visit("/");

        cy.get('[data-cy="site-link"]').should("be.visible");
        cy.get('[data-cy="site-link"]').should("contain.text", "Spotify");
    });

    it("shows at least one album card", () => {
        cy.visit("/");

        cy.get('[data-cy="album-card"]').should("have.length.at.least", 1);
    });

    it("album card has a title and price", () => {
        cy.visit("/");

        cy.get('[data-cy="album-title"]').should("be.visible");

        // price?
    });

    it("has a visible search input on the top", () => {
        cy.visit("/");

        cy.get('[data-cy="search-input"]').should("be.visible");
    });

    // add at least 3 more tests here
});
