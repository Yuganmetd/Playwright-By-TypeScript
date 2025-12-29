import { Locator, Page } from '@playwright/test'

export class YouTubeHomePage {

    readonly page: Page;

    readonly searchTextBox: Locator;

    constructor(page: Page) {
        this.page = page

        // Elements 
        this.searchTextBox = page.locator('[name="search_query"]')

    }

    // Methods

    async goToURL() {

        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.YOUTUBE_URL}`)
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }
        else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.YOUTUBE_URL}`)
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }
        await this.page.goto(`${process.env.YOUTUBE_URL}`)
    }

    async searchWithKeyWords(keyword: string) {
        await this.searchTextBox.click()
        await this.searchTextBox.fill(keyword)
        await this.searchTextBox.press('Enter')
    }
}