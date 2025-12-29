import { test as base } from '@playwright/test';
import {YouTubeHomePage} from '../../src/pages/HomePage'
import {SearchResultsPage} from '../../src/pages/SearchResultPage'
import {PlayListPage} from '../../src/pages/PlayListPage'

import {loadTestData} from '../utils/JsonHelper'
import { TestData } from '../../src/interface/Module1TestData.interface'



export const test = base.extend<{
    saveLogs: void;
    homePage : YouTubeHomePage;
    resultPage : SearchResultsPage;
    playlistPage : PlayListPage;
    testData : TestData;

}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global before is running...');

        await use();

        console.log('Global afterEach is running...');
    },
    {auto  :true}],

    homePage : async({page},use)=>{
        const homePage = new YouTubeHomePage(page)
        await use(homePage)
    },
     resultPage : async({page},use)=>{
        const resultPage = new SearchResultsPage(page)
        await use(resultPage)
    },
    playlistPage : async({page},use)=>{
        const playlistPage = new PlayListPage(page)
        await use(playlistPage)
    },
    testData : async({page},use)=>{
        const data = await loadTestData();
        await use(data)
    }

});

export {expect} from '@playwright/test'