export class RegExpHandlers {
  static regExprForInput(value) {
    let regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/0-9? ]/g;

    return regex.test(value) ? value.replace(regex, ' ') : value;
  }
}
