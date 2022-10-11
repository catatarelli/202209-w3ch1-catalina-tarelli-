import Component from "../Component/Component";

class Button extends Component {
  constructor(
    parentElement: HTMLElement,
    tag: string,
    className: string,
    private readonly text: string,
    private readonly action: () => void
  ) {
    super(parentElement, "button", "btn ");
  }

  render() {
    super.render();

    this.domElement.textContent = this.text;
  }

  addListeners(): void {
    this.domElement.addEventListener("click", () => {});
  }
}

export default Button;
