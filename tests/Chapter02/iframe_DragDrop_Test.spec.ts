import {test,expect} from '@playwright/test'

test('iframe , drag and drop Test',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')

    const iframe = page.frameLocator('[class="demo-frame"]')

    const droppable = iframe.locator('[id="droppable"]')
    const draggable = iframe.locator('[id="draggable"]')

    await draggable.dragTo(droppable)



})