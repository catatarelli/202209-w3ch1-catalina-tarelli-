import Component from "./Component";

class Button extends Component {
  constructor(
    parentElement: HTMLElement,
    className: string,
    private text: string,
    private action: () => void
  ) {
    super(parentElement, "button", `btn ${className}`);
  }

  render() {
    super.render();

    this.domElement.textContent = this.text;
  }

  addListeners(): void {
    this.domElement.addEventListener("click", this.action);
  }
}

export default Button;
