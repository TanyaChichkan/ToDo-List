export class DateMethods {
  setTimingStart(value = '') {
    const date = value ? value : new Date();
    const dayOfMonth = this.dateFormatting(date.getDate());
    const month = this.dateFormatting(date.getMonth() + 1);
    const year = date.getFullYear();
    const result = `${dayOfMonth}-${month}-${year}`;
    return result;
  }

  setTimingFinish() {
    const date = new Date();
    const expDate = date.setDate(date.getDate() + 1);
    const expDateFormatted = this.setTimingStart(new Date(expDate));
    return expDateFormatted;
  }

  dateFormatting(value) {
    return value < 10 ? String(value).padStart(2, '0') : value;
  }

  dateCheck(value) {
    if (value === 'creationDate') {
      return this.startDateInput.value
        ? this.dateEdit(this.startDateInput.value)
        : this.setTimingStart();
    }

    if (value === 'expirationDate') {
      return this.endDateInput.value
        ? this.dateEdit(this.endDateInput.value)
        : this.setTimingFinish();
    }

    if (value === 'creationDateForm') {
      return this.setTimingStart();
    }

    if (value === 'expirationDateForm') {
      return this.setTimingFinish();
    }
  }

  dateEdit(value) {
    return value.split('-').reverse().join('-');
  }

  
}
