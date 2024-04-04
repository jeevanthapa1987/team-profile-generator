const Manager = require('../lib/Manager');

describe("Manager", () => {
  it("Should create an object with a name, id, email, and office number", () => {
    const manager = new Manager("Bob", 1, "bob@example.com", 101);

    expect(manager.name).toBe("Bob");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("bob@example.com");
    expect(manager.officeNumber).toBe(101);
  });

  it("Should return 'Manager' when getRole() is called", () => {
    const manager = new Manager("Bob", 1, "bob@example.com", 101);

    expect(manager.getRole()).toBe("Manager");
  });

  it("Should return the office number when getOfficeNumber() is called", () => {
    const manager = new Manager("Bob", 1, "bob@example.com", 101);

    expect(manager.getOfficeNumber()).toBe(101);
  });
});
