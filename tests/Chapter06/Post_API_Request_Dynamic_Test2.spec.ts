import { test, expect } from '@playwright/test'
import { formatAPIRequest } from '../../src/utils/APIHelper'
import path from 'path'
import fs from 'fs'
import { faker } from '@faker-js/faker'


test.use({
    baseURL: process.env.BASE_API_URL
})
test('Create POST API Request using Dynamic file 2', async ({ request }) => {

    // Reading JSON File
    const filePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json')
    const jsonTemplate = await fs.readFileSync(filePath, 'utf-8')

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const totalPrice = faker.number.int({ min: 1000, max: 10000 })

    const values = [firstName, lastName, totalPrice]

    // Updating Post API Request body
    const postRequest = await formatAPIRequest(jsonTemplate, values)
    const postAPIRequest = JSON.parse(postRequest)

    const PostAPIResponce = await request.post(`booking`, { data: postAPIRequest })
    const JSONPostAPIResponce = await PostAPIResponce.json()

    //Print JSON Responce
    console.log('POST API Responce : ' + JSON.stringify(JSONPostAPIResponce, null, 2))
    //Validate status code, status text, responce type
    expect(PostAPIResponce.status()).toBe(200)
    expect(PostAPIResponce.statusText()).toBe('OK')
    expect(PostAPIResponce.headers()['content-type']).toContain('application/json')
    // Validate property/keys
    expect(JSONPostAPIResponce.booking).toHaveProperty('firstname')
    expect(JSONPostAPIResponce.booking).toHaveProperty('bookingdates')
    expect(JSONPostAPIResponce.booking.bookingdates).toHaveProperty('checkin')
    expect(JSONPostAPIResponce.booking.bookingdates).toHaveProperty('checkout')
    // Validate API Responce body
    expect(JSONPostAPIResponce.bookingid).toBeGreaterThan(0)
    expect(JSONPostAPIResponce.booking.firstname).toBe(firstName)
    expect(JSONPostAPIResponce.booking.lastname).toBe(lastName)
    expect(JSONPostAPIResponce.booking.bookingdates.checkin).toBe('2025-12-30')
    expect(JSONPostAPIResponce.booking.bookingdates.checkout).toBe('2025-12-31')
})