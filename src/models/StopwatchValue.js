export default class StopwatchValue extends Number {
  toString() {
    const milliseconds = Math.floor((this % 1000) / 100)
      .toString()
      .padStart(1, "0");
    const seconds = Math.floor((this / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((this / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const hours = Math.floor((this / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
}
