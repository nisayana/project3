/// <reference types = "cypress" />

import BookingPage from "../pages/BookingPage"

describe("project3", () => {

    const bookingPage = new BookingPage()

    beforeEach(() => {
        cy.visit("/project-3")
    });

    it("Test Case 01 - Validate the default Book your trip form", () => {
        cy.get(".Projects_container__04CSc").as("form")
        
        cy.get(".radio > input").eq(0).should("be.checked")
        cy.get(".radio > input").eq(1).should("not.be.checked")

        cy.get("@form").nextAll().each(($ele, idx) => {
            cy.wrap($ele).should("be.visible")
            cy.get($ele).each(($child, idx) => {
                cy.wrap($child).should("be.visible", "not.be.enabled")
            })
        })

        const data = ["1", "Adult (16-64)"]

        cy.get(".field:nth-child(7) option:nth-child(1), .field:nth-child(8) option:nth-child(1)").each(($el, idx) => {
            cy.wrap($el).should("be.visible").and("have.text", data[idx])
        })

        cy.get("button[type='submit']").should("be.visible", "be.enabled")
    })

    it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
        cy.get(".radio > input").eq(1).check().should('be.checked')
        cy.get(".radio > input").eq(0).should("not.be.checked")

        cy.get(".Projects_container__04CSc").as("form")

        cy.get("@form").each(($ele, idx) => {
            cy.wrap($ele).should("be.visible")
            cy.get($ele).each(($child, idx) => {
                cy.wrap($child).should("be.visible")
            })
        })

        const data = ["1", "Adult (16-64)"]

        cy.get(".field:nth-child(7) option:nth-child(1), .field:nth-child(8) option:nth-child(1)").each(($el, idx) => {
            cy.wrap($el).should("be.visible").and("have.text", data[idx])
        })

        cy.get('.Button_c_button__TmkRS').should("be.visible", "be.enabled")
    })

    it("Test Case 03 - Validate the booking for 1 passenger and one way", () => {
        cy.get(".radio > input").eq(0).click().should("be.checked")
        const data = ["Business", "Illinois", "Florida", "1", "Senior (65+)"]
        
        cy.get(".field .select").children().each(($el, idx) => {
            cy.wrap($el).select(data[idx])
        })

        cy.get(":nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input").clear().type(bookingPage.pickNextWeek())
        cy.get('.react-datepicker__month-container').invoke('css', 'display', 'none')
        cy.get('.Button_c_button__TmkRS').click()

        const updatedData = ["DEPART", "IL to FL", "Number of Passengers: 1", "Passenger 1: Senior (65+)", "Cabin class: Business"]
        updatedData.forEach(el => {
            cy.contains(el).should('exist')
        })
    })

    it("Test Case 04 - Validate the booking for 1 passenger and round trip", () => {
        cy.get(".radio > input").eq(1).click().should("be.checked")
        const data = ["First", "California", "Illinois", "1", "Adult (16-64)"]

        cy.get(".field .select").children().each(($el, idx) => {
            cy.wrap($el).select(data[idx])
        })

        cy.get(":nth-child(6) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input").clear().type(bookingPage.pickNextMonth())
        cy.get('.react-datepicker-popper > :nth-child(1)').invoke('css', 'display', 'none')
        cy.get('.Button_c_button__TmkRS').click()

        const departData = ["DEPART", "CA to IL", "Number of Passengers: 1", "Passenger 1: Adult (16-64)", "Cabin class: First"]
        departData.forEach(el => {
            cy.contains(el).should("exist")
        })

        const returnData = ["RETURN", "IL to CA"]
        returnData.forEach(el => {
            cy.contains(el).should("exist")
        })
    })

    it.only("Test Case 05 - Validate the booking for 2 passengers and one way", () => {
        
    })
})