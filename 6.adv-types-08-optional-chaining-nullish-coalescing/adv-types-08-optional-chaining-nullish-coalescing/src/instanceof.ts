// type guards via "instanceof" operator - check Classes insrtaces
class User {
  constructor(public name: string) {}
  join() {
    //
  }
}

class Admin {
  constructor(public permissions: string[]) {}
  scan() {
    //
  }
}

const user = new User("Tony");
const admin = new Admin(["tina", "jay"]);

type Entity = User | Admin; //union type

function init(entity: Entity) {
  if (entity instanceof User) {
    // instanceof keyword - checking class instance / value of entity
    entity.join();
    return;
  }
  entity.scan();
}
