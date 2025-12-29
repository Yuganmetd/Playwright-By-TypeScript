import {test} from '../../src/fixture/TestFixture'


test('Page Object Model in PlayWright', async({page,homePage,resultPage,playlistPage,testData})=>{
    await homePage.goToURL()
    await homePage.searchWithKeyWords(String(testData.Module1TestData?.Skill1))
    await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1))
    await playlistPage.validatePageTitle(`${process.env.TITLE}`)

    console.log(`Skill : ${String(testData.Module1TestData?.Skill1)}`)
    console.log(`Skill : ${String(testData.Module1TestData?.Skill2)}`)
    console.log(`Skill : ${String(testData.Module1TestData?.Skill2)}`)


})