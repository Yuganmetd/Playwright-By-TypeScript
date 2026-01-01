import { test, expect } from '@playwright/test'
import postAPIRequest from '../../test-data/api_requests/POST_API_Request.json'


test.use({
    baseURL: process.env.BASE_API_URL
})
test('Create POST API Request using Static file', async ({ request }) => {

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
    expect(JSONPostAPIResponce.booking.firstname).toBe('Playwright Automation by Testers Talk')
    expect(JSONPostAPIResponce.booking.lastname).toBe('Playwright with Typescript')
    expect(JSONPostAPIResponce.booking.bookingdates.checkin).toBe('2025-12-30')
    expect(JSONPostAPIResponce.booking.bookingdates.checkout).toBe('2025-12-31')
})