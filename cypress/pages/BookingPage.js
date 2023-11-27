class BookingPage {
    // constructor() {
    //     this.bookingForm = cy.get(".Projects_container__04CSc");
    // }

    // verifyProjectsVisibility() {
    //     this.bookingForm.each(($ele, idx) => {
    //         cy.wrap($ele).should("be.visible");
    //         cy.get($ele).each(($child, idx) => {
    //             cy.wrap($child).should("be.visible");
    //         });
    //     });
    // }

    pickNextWeek() {
        const date = new Date();
        const nextWeek = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
        const formattedDate = `${nextWeek.getMonth() + 1}/${nextWeek.getDate()}/${nextWeek.getFullYear()}`;
        return formattedDate;
    }

    pickNextMonth() {
        const date = new Date();
        const nextMonth = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate()
        );
        const formattedDate = `${nextMonth.getMonth() + 1}/${nextMonth.getDate()}/${nextMonth.getFullYear()}`;
        return formattedDate;
    }

    pickNextDay() {
        const date = new Date();
        const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
        const formattedDate = `${nextDay.getMonth() + 1}/${nextDay.getDate()}/${nextDay.getFullYear()}`;
        return formattedDate;
    }
      
}

export default BookingPage