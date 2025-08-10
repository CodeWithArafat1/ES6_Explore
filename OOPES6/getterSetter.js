class Person {
  #name;
  constructor(name, email) {
    this.#name = name;
    this.email = email;
  }

  draw() {
    console.log(`${this.name} ${this.email}`);
    this.#print();
  }

  #print() {
    console.log(this.#name);
  }

  get print() {
    return this.#name;
  }
  set print(v) {
    return v;
  }
}

const p1 = new Person("arafat", "arafat@gmail.com");
p1.print('xyz')
console.log(p1.print);