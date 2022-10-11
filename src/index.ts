import characters from "./characters/characters.js";
import AppContainer from "./components/AppContainer.js";
import CharacterCard from "./components/CharacterCard";
import CharactersList from "./components/CharactersList.js";

const rootElement = document.querySelector(".root");

const appContainer = new AppContainer(rootElement as HTMLElement);
appContainer.render();

const charactersList = new CharactersList(appContainer.domElement);
charactersList.render();

characters.forEach((character) => {
  const characterCard = new CharacterCard(charactersList.domElement, character);
  characterCard.render();
});
