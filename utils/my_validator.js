/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
export default class Validation {
  constructor(arg) {
    this.value = arg;
  }

  IsNotEmpty() {
    if (typeof this.value === 'undefined' || this.value === '') {
      throw new Error(`${this.value} is empty`);
    }
    return this;
  }

  IsString() {
    if (typeof this.value !== 'string') {
      throw new Error(`${this.value} is not a string`);
    }
    return this;
  }

  IsNumber() {
    if (typeof this.value !== 'number') {
      throw new Error(`${this.value} is not a number`);
    }
    return this;
  }

  StringLimit(limit) {
    if (typeof this.value !== 'string') {
      throw new Error(`${this.value} is not a string`);
    }
    if (this.value.length > limit) {
      throw new Error(`${this.value} is too long (limit: ${limit})`);
    }
    return this;
  }

  StringMinimal(limit) {
    if (typeof this.value !== 'string') {
      throw new Error(`${this.value} is not a string`);
    }
    if (this.value.length < limit) {
      throw new Error(`${this.value} is too short (minimum: ${limit})`);
    }
    return this;
  }

  NumberLimit(limit) {
    if (typeof this.value !== 'number') {
      throw new Error(`${this.value} is not a number`);
    }
    if (this.value > limit) {
      throw new Error(`${this.value} is too big (limit: ${limit})`);
    }
    return this;
  }

  NumberMinimal(limit) {
    if (typeof this.value !== 'number') {
      throw new Error(`${this.value} is not a number`);
    }
    if (this.value < limit) {
      throw new Error(`${this.value} is too small (minimum: ${limit})`);
    }
    return this;
  }
}
