/// <reference types="cypress" />

describe("E2E - lesson", () => {
    it("Lokalizatorach", () => {
        cy.visit("/")
    
    //Po znaczniku
    cy.get("a");

    //Indetyfikator
    cy.get("#search_query_top")

    //Po klasie
    cy.get(".form-control")

    //Po arybutach
    cy.get('[name="search_query"]')
    cy.get('[placeholder="Search"]')


    //Dokładnieszy atrybut wraz z podaniem znacznika
    cy.get('input[placeholder="Search"]')

    //Pobieranie elementów po kilku atrybutach 
    cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

    //Zalecana praktyka elementów 
    //cy.get('[data.cy="wyszukiwarka"]')



    })
    
    it.only("Lokalizatory cz2.", () => {
        cy.visit("/")
        cy.contains("Shop now !")
        cy.contains('[title="Contact Us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").first()//eq(1)
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
        cy.get("li").parents("#home-page-tabs").find("li").contains("Popular")

    
    })



})



