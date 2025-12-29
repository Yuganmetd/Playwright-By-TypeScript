import {Locator,Page,expect} from '@playwright/test'

export class PlayListPage {

    readonly page:Page;



    constructor(page:Page) {
        this.page = page

        // Elements 
    }

    // Methods


    async validatePageTitle (title:string){
        await expect(this.page).toHaveTitle(title)
    }
}