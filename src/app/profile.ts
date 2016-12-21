export class Profile {
  id: number;
  firstName: string = '';
  lastName: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
