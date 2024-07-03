export default class Toaster {
  constructor (message) {
    this.message = message
  }

  /**
   * Need to create a div element with the id = "toastr
   * "
   */
  static toast () {
    this.isToasted = true
  }
}
