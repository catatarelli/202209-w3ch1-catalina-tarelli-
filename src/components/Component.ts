import ComponentStructure from "./types.js";

class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private parentElement: HTMLElement,
    tag: string,
    className: string
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render() {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;
