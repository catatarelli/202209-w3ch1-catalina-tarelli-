import Advisor from "./Advisor/Advisor.js";
import Fighter from "./Fighter/Fighter.js";
import King from "./King/King.js";
import Squire from "./Squire/Squire.js";

const joffrey = new King("Joffrey", "Baratheon", 16, 2);
const jaime = new Fighter("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Fighter("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Advisor("Tyrion", "Lannister", 40, "Daenerys");
const bronn = new Squire("Bronn", "AguasNegras", 54, 0, "Jaime");

joffrey.imagePath = "../../images/joffrey.jpg";
jaime.imagePath = "../../images/jaime.jpg";
daenerys.imagePath = "../../images/daenerys.jpg";
tyrion.imagePath = "../../images/tyrion.jpg";
bronn.imagePath = "../../images/bronn.jpg";

const characters = [joffrey, jaime, daenerys, tyrion, bronn];

export default characters;
