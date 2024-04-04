const Employee = require('../lib/Employee');

describe("Employee", () => {
  it("Should create an object with a name, id, and email", () => {
    const employee = new Employee("Alice", 1, "alice@example.com");

    expect(employee.name).toBe("Alice");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("alice@example.com");
  });

  it("Should return the name when getName() is called", () => {
    const employee = new Employee("Alice", 1, "alice@example.com");

    expect(employee.getName()).toBe("Alice");
  });

  it("Should return the id when getId() is called", () => {
    const employee = new Employee("Alice", 1, "alice@example.com");

    expect(employee.getId()).toBe(1);
  });

  it("Should return the email when getEmail() is called", () => {
    const employee = new Employee("Alice", 1, "alice@example.com");

    expect(employee.getEmail()).toBe("alice@example.com");
  });

  it("Should return 'Employee' when getRole() is called", () => {
    const employee = new Employee("Alice", 1, "alice@example.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
