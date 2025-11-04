describe("Album Catalog - Interactions", () => {
    it("looks for songs when searching via search bar", () => {
        cy.visit("/");

        const searchValue = "test";

        cy.get('[data-cy="search-input"]').type(searchValue);
        cy.get('[data-cy="search-input"]').should("have.value", searchValue);

        cy.get('[data-cy="search-button"]').click();

        cy.url().should("include", "/search");
    });

    it("navigates to the first album detail", () => {
        cy.visit("/");

        cy.get('[data-cy="detail-button"]').first().click();

        cy.url().should("include", "/album/1");
    });

    it("navigates to home page after clicking on Spotify logo", () => {
        cy.visit("/about");

        cy.get('[data-cy="site-link"]').click();

        cy.url().should("include", "/");
    });

    it("empty search gives no such query error", () => {
        cy.visit("/");

        cy.get('[data-cy="search-button"]').click();

        cy.url().should("include", "/search");

        cy.get('[data-cy="no-such-query-error"]').should("be.visible");
    });

    it("shows every section in search results", () => {
        cy.visit("/");

        const searchValue = "test";

        cy.get('[data-cy="search-input"]').type(searchValue);

        cy.get('[data-cy="search-button"]').click();

        cy.get('[data-cy="songs-section"]').should("be.visible");
        cy.get('[data-cy="albums-section"]').should("be.visible");
        cy.get('[data-cy="authors-section"]').should("be.visible");
    });

    it("can search from search page", () => {
        cy.visit("/");
        cy.get('[data-cy="search-button"]').click();

        const searchValue = "x";

        cy.get('[data-cy="search-input"]').type(searchValue);
        cy.get('[data-cy="search-button"]').click();

        cy.url().should("include", `/search?q=${searchValue}`);
    });

    it("invalid album id gives not found error", () => {
        cy.visit("/album/9898999");

        cy.get('[data-cy="album-not-found"]').should("be.visible");
    });

    it("zochova check email on contact page", () => {
        cy.visit("https://zochova.sk");

        const correctMail = "office@zochova.sk";

        cy.get("#hamburger").click();
        cy.get("#header a").contains("Kontakt").click();

        cy.get("#pageContent").contains(correctMail);
    });
});
