/// <reference types = "cypress" />

import BookingPage from "../pages/BookingPage"

describe("project3", () => {

    const bookingPage = new BookingPage()

    beforeEach(() => {
        cy.visit("/project-3")
    });

    it("Test Case 01 - Validate the default Book your trip form", () => {
        
        cy.getRadioButton(0).should("be.checked")
        cy.getRadioButton(1).should("not.be.checked")

        cy.getFormElement().each(($ele, idx) => {
            cy.checkVisibility($ele)
        })

        const data = ["1", "Adult (16-64)"]

        cy.get(".field:nth-child(7) option:nth-child(1), .field:nth-child(8) option:nth-child(1)").each(($el, idx) => {
            cy.wrap($el).should("be.visible").and("have.text", data[idx])
        })

        cy.get("button[type='submit']").should("be.visible", "be.enabled")
    })

    it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
        cy.getRadioButton(1).check().should('be.checked')
        cy.getRadioButton(0).should("not.be.checked")

        cy.getFormElement().each(($ele, idx) => {
            cy.checkVisibility($ele)
        })

        const data = ["1", "Adult (16-64)"]

        cy.get(".field:nth-child(7) option:nth-child(1), .field:nth-child(8) option:nth-child(1)").each(($el, idx) => {
            cy.wrap($el).should("be.visible").and("have.text", data[idx])
        })

        cy.get('.Button_c_button__TmkRS').should("be.visible", "be.enabled")
    })

    it("Test Case 03 - Validate the booking for 1 passenger and one way", () => {
        cy.getRadioButton(0).click().should("be.checked")
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
        cy.getRadioButton(1).click().should("be.checked")
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

    it("Test Case 05 - Validate the booking for 2 passengers and one way", () => {
        cy.getRadioButton(0).click().should("be.checked")

        const data = ["Premium Economy", "New York", "Texas", "2", "Adult (16-64)", "Child (2-11)"]
        cy.get(".field .select").children().each(($el, idx) => {
            cy.wrap($el).select(data[idx])
        })
        cy.get(":nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input").clear().type(bookingPage.pickNextDay())
        cy.get('.react-datepicker__month-container').invoke('css', 'display', 'none')
        cy.get('.Button_c_button__TmkRS').click()

        const updatedData = ["DEPART", "NY to TX", "Number of Passengers: 2", "Passenger 1: Adult (16-64)","Passenger 2: Child (2-11)", "Cabin class: Premium Economy"]
        updatedData.forEach(el => {
            cy.contains(el).should("exist")
        })
    })
})