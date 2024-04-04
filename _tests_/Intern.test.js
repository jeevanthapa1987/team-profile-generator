const Intern = require('../lib/Intern');

describe("Intern", () => {
  it("Should create an object with a name, id, email, and school", () => {
    const intern = new Intern("David", 3, "david@example.com", "Example University");

    expect(intern.name).toBe("David");
    expect(intern.id).toBe(3);
    expect(intern.email).toBe("david@example.com");
    expect(intern.school).toBe("Example University");
  });

  it("Should return 'Intern' when getRole() is called", () => {
    const intern = new Intern("David", 3, "david@example.com", "Example University");

    expect(intern.getRole()).toBe("Intern");
  });

  it("Should return the school when getSchool() is called", () => {
    const intern = new Intern("David", 3, "david@example.com", "Example University");

    expect(intern.getSchool()).toBe("Example University");
  });
});
