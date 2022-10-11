import Character from "../characters/Character/Character.js";
import Component from "./Component.js";

class Communications extends Component {
  constructor(parentElement: HTMLElement, private character: Character) {
    super(parentElement, "div", "communications");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
     <p class="comunications__text display-1">${this.character.communicate}</p>
      <img
        class="comunications__picture"
        src="${this.character.imagePath}"
        alt="${this.character.name} ${this.character.family}"/>
    `;
  }
}

export default Communications;
