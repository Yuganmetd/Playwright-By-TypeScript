import {test} from '../../src/fixture/TestFixture'
import {YouTubeHomePage} from '../../src/pages/HomePage'
import {SearchResultsPage} from '../../src/pages/SearchResultPage'
import { PlayListPage } from '../../src/pages/PlayListPage'



test('Test Fixtures in PlayWright', async({page})=>{

    console.log('Test Execution Started....')

    // Create Object for Homepage

    const homePage = new YouTubeHomePage(page)
    await homePage.goToURL()
    await homePage.searchWithKeyWords(`${process.env.SEARCH_WITH_KEYS}`)

    // Create Object for Results Page
    const resultPage = new SearchResultsPage(page)
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_WITH_KEYS}`)

    // Create Object for PlayList Page
    const playListPage = new PlayListPage(page)
   // await playListPage.validatePageTitle(`${process.env.TITLE}`)

       console.log('Test Execution Ended....')

})