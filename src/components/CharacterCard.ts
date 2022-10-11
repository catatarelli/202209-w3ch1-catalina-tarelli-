import Advisor from "../characters/Advisor/Advisor.js";
import Character from "../characters/Character/Character.js";
import Fighter from "../characters/Fighter/Fighter.js";
import King from "../characters/King/King.js";
import Squire from "../characters/Squire/Squire.js";
import Component from "./Component.js";

class CharacterCard extends Component {
  constructor(parentElement: HTMLElement, private character: Character) {
    super(parentElement, "li", "character col");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <div class="card character__card">
        <img src="${this.character.imagePath}" alt="${this.character.name} ${
      this.character.family
    }" 
        class="character__picture card-img-top" height=100 width=100/>
          <div class="card-body">
            <h2 class="character__name card-title h4">${this.character.name} ${
      this.character.family
    }</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.character.age}/li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                ${
                  this.character instanceof King
                    ? `<li>Años de reinado: ${this.character.yearsOfReign}</li>`
                    : ""
                }
                ${
                  this.character instanceof Fighter
                    ? `<li>Arma: ${this.character.weapon}</li>         
                  <li>Destreza: ${this.character.dexterity}</li>`
                    : ""
                }
                ${
                  this.character instanceof Squire
                    ? `<li>Peloteo: ${this.character.kissAssLevel}</li> <li>Sirve a: ${this.character.serves}</li>`
                    : ""
                }
                ${
                  this.character instanceof Advisor
                    ? `<li>Asesora a: ${this.character.advises}</li>`
                    : ""
                }
                </ul>
                <div class="character__actions">
                </div>
              </div>
            </div>
            <i class="emoji">
            ${
              this.character instanceof King
                ? "👑"
                : this.character instanceof Fighter
                ? "⚔️"
                : this.character instanceof Advisor
                ? "🎓"
                : this.character instanceof Squire
                ? "🛡️"
                : ""
            }
            </i>
    </div>`;
  }
}

export default CharacterCard;
