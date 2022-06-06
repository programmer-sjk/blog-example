class User {
  name: string;
  level: string;

  constructor(name: string, level: string) {
    this.name = name;
    this.level = level;
  }

  static createWithLoggedTime(name: string, level: string) {
    /** 로깅 코드라고 가정*/
    LOGGER.log(Level.INFO, `User is created: ${new Date()}`);
    return new User(name, level);
  }
}
