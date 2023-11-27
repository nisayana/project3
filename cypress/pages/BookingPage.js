class BookingPage {
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
}

export default BookingPage