export abstract class AbstractDateTime {
  abstract now(): Date;
}

export class DateTimeActual implements AbstractDateTime {
  now(): Date {
    return new Date();
  }
}

export class DateTimeMock implements AbstractDateTime {
  time: Date = new Date(2019, 1, 1);
  setup(time: Date) {
    this.time = time;
  }

  addSeconds(seconds: number) {
    this.time.setSeconds(this.time.getSeconds() + seconds);
  }

  now() {
    return new Date(this.time.toISOString());
  }
}
