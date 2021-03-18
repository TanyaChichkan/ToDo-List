export class IdCreator {
  static idCreate() {
    return `${Date.now()}${Math.round(Math.random() * (255 - 1) + 1)}`;
  }
}
