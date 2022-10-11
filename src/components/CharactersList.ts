import Component from "./Component.js";

class CharacterList extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "ul", "characters-list row list-unstyled");
  }

  render() {
    super.render();
  }
}

export default CharacterList;
