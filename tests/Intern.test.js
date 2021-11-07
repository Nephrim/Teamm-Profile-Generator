const intern = require('../lib/intern')

describe('Intern', () => {
  describe('InitializeJs', () => {
    test('Initializes Intern object', () => {
      const cb = new intern();
      expect(typeof cb).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "bobby";
      const cb = new intern(name, "Intern", 7, "bobby@gmail.com", "Trilogy", "bobbyboi");
      expect(cb.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Intern";
      const cb = new intern(role, "bobby", 7, "bobby@gmail.com", "Trilogy", "Nephrim");
      expect(cb.getRole()).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 7;
      const cb = new intern("bobby", id, "Intern", "bobby@gmail.com", "Trilogy", "Nephrim");
      expect(cb.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "bobby@gmail.com";
      const cb = new intern("bobby", "Intern", email, 7, "Trilogy", "Nephrim");
      expect(cb.email).toBe(email);
    });
    test("Can set school attribute with constructor", () => {
      const school = "Trilogy";
      const cb = new intern("bobby", "Intern", 7, school, "bobby@gmail.com", "Nephrim");
      expect(cb.school).toBe(school);
    });
    test("Can set github attribute with constructor", () => {
      const github = "Nephrim";
      const cb = new intern("bobby", "Intern", 7, "bobby@gmail.com", github, "Trilogy");
      expect(cb.github).toBe(github);
    });
  });


  describe("getInfo", () => {
    test("Does getName() method get name?", () => {
      const name = "bobby";
      const cb = new intern(name, "Intern", 7, "bobby@gmail.com", "Trilogy", "Nephrim");
      expect(cb.getName()).toBe(name);
    });
    test("Does getRole() method get role?", () => {
      const role = "Intern";
      const cb = new intern("bobby", role, 7, "bobby@gmail.com", "Trilogy", "Nephrim");
      expect(cb.getRole()).toBe(role);
    });
    test("Does getId() method get Id?", () => {
      const id = 7;
      const cb = new intern("bobby", id, "Intern", "bobby@gmail.com", "Trilogy", "Nephrim");
      expect(cb.getId()).toBe(id);
    });
    test("Does getEmail() method get mail?", () => {
      const email = "bobby@gmail.com";
      const cb = new intern("bobby", "Intern", email, 7, "Trilogy", "Nephrim");
      expect(cb.getEmail()).toBe(email);
    });
    test("Can set school attribute with constructor", () => {
      const school = "Trilogy";
      const cb = new intern("bobby", "Intern", 7, school, "bobby@gmail.com", "Nephrim");
      expect(cb.school).toBe(school);
    });
    test("Does getGitHub() method get GitHub username?", () => {
      const github = "Nephrim";
      const cb = new intern("bobby", "Intern", 7, "bobby@gmail.com", github, "Trilogy");
      expect(cb.getGitHub()).toBe(github);
    });
  });
});