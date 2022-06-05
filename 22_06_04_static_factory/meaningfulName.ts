// 기존 생성자 사용
class User {
  name: string;
  level: string;

  constructor(name: string, level: string) {
    this.name = name;
    this.level = level;
  }
}

const user = new User('이름', '어드민');

// 정적 팩토리 메소드 사용
class UserFactory {
  name: string;
  level: string;

  private constructor(name: string, level: string) {
    this.name = name;
    this.level = level;
  }

  static createAdminUser(name: string) {
    return new User(name, 'admin');
  }
}

const adminUser = UserFactory.createAdminUser('신입');
