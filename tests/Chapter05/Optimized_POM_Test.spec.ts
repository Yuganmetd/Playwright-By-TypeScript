// import {test} from '@playwright/test'
// import {YouTubeHomePage} from '../../src/pages/HomePage'
// import {SearchResultsPage} from '../../src/pages/SearchResultPage'
// import { PlayListPage } from '../../src/pages/PlayListPage'

import {test} from '../../src/fixture/TestFixture'


test('Page Object Model in PlayWright', async({page,homePage,resultPage,playlistPage})=>{
    await homePage.goToURL()
    await homePage.searchWithKeyWords(`${process.env.SEARCH_WITH_KEYS}`)
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_WITH_KEYS}`)
    await playlistPage.validatePageTitle(`${process.env.TITLE}`)
})