const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  it("Should create an object with a name, id, email, and GitHub username", () => {
    const engineer = new Engineer("Charlie", 2, "charlie@example.com", "charliegit");

    expect(engineer.name).toBe("Charlie");
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe("charlie@example.com");
    expect(engineer.github).toBe("charliegit");
  });

  it("Should return 'Engineer' when getRole() is called", () => {
    const engineer = new Engineer("Charlie", 2, "charlie@example.com", "charliegit");

    expect(engineer.getRole()).toBe("Engineer");
  });

  it("Should return the GitHub username when getGithub() is called", () => {
    const engineer = new Engineer("Charlie", 2, "charlie@example.com", "charliegit");

    expect(engineer.getGithub()).toBe("charliegit");
  });
});
