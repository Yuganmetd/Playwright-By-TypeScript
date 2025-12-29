import { test, expect } from '@playwright/test';
test('Iterating Matching element in playwright ', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN');
    const repositoryLinks = await page.$$('.repo')

    for (const repository of repositoryLinks){
        const text =await repository.textContent()
        console.log(`Text from 1st for loop : ${text}`)
    }
    
    console.log('===================================')

    for(let index=0;index<repositoryLinks.length;index++){
        const text =await repositoryLinks[index].textContent()
console.log(`Text from 2nd for loop : ${text}`)

    }

        console.log('===================================')

        const repositoryLinks2 = await page.locator('.repo')
        const count = await repositoryLinks2.count()
        for(let index=0;index<count;index++){
          const text = await repositoryLinks2.nth(index).textContent()
          console.log(`Text from 3rd for loop : ${text}`)
        }
})