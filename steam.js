import AnimePage from './page_Anime.js';
import StartPage from './page_start';
import AgePage from './page_age';

const startPage = new StartPage(); 
const agePage = new AgePage();
const animePage = new AnimePage();

fixture `Steam`
    .page `https://store.steampowered.com/`;

test('First test', async t => {
    await t
    .hover(startPage.Catigories)
    .click(startPage.Anime)
    .click(animePage.topsell)

    const newD = await animePage.getDallaz(); 
    const newInfo1 = await animePage.getGame();

    await t
    .click(animePage.gameSelector.withText(newD))
     agePage.ageSelector();
     const newInfo2 = await animePage.getSecondGame();
     animePage.matchCheck(newInfo1,newInfo2);
    
});
