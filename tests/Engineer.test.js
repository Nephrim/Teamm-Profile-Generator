const engineer = require('../lib/engineer')

describe('Engineer', () => {
  describe('InitializeJs', () => {
    test('Initializes Engineer object', () => {
      const cb = new engineer();
      expect(typeof cb).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Viktor";
      const cb = new engineer(name, "Engineer", 7, "Viktor@gmail.com", "Nephrim");
      expect(cb.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Engineer";
      const cb = new engineer("Viktor", role, 7, "Viktor@gmail.com", "Nephrim");
      expect(cb.getRole()).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 7;
      const cb = new engineer("Viktor", id, "Engineer", "Viktor@gmail.com", "Nephrim");
      expect(cb.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "Viktor@gmail.com";
      const cb = new engineer("Viktor", "Engineer", email, 7, "Nephrim");
      expect(cb.email).toBe(email);
    });
    test("Can set github attribute with constructor", () => {
      const github = "Nephrim";
      const cb = new engineer("Viktor", "Engineer", 7, github, "Viktor@gmail.com");
      expect(cb.github).toBe(github);
    });
  });


  describe("getInfo", () => {
    test("Does getName() method get name?", () => {
      const name = "Viktor";
      const cb = new engineer(name, "Engineer", 7, "Viktor@gmail.com", "Nephrim");
      expect(cb.getName()).toBe(name);
    });
    test("Does getRole() method get role?", () => {
      const role = "Engineer";
      const cb = new engineer("Viktor", role, 7, "Viktor@gmail.com", "Nephrim");
      expect(cb.getRole()).toBe(role);
    });
    test("Does getId() method get Id?", () => {
      const id = 7;
      const cb = new engineer("Viktor", id, "Engineer", "Viktor@gmail.com", "Nephrim");
      expect(cb.getId()).toBe(id);
    });
    test("Does getEmail() method get mail?", () => {
      const email = "Viktor@gmail.com";
      const cb = new engineer("Viktor", "Engineer", email, 7, "Nephrim");
      expect(cb.getEmail()).toBe(email);
    });
    test("Does getGitHub() method get GitHub username?", () => {
      const github = "Nephrim"; 
      const cb = new engineer("Viktor", "Engineer", 7, github, "Viktor@gmail.com");
      expect(cb.getGitHub()).toBe(github);
    });
  });
});