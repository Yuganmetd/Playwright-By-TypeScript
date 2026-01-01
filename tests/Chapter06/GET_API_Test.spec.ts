import { test, expect } from '@playwright/test'
import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'
import { faker } from '@faker-js/faker'


test.use({
    baseURL: process.env.BASE_API_URL
})
test('Create GET API Request in Playwright', async ({ request }) => {


    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const totalPrice = faker.number.int({ min: 1000, max: 10000 })

    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice, true,
        "breakfast", "2025-12-30", "2025-12-31")

    // Updating Post API Request body

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


    // GET API Call

    const bookingId = JSONPostAPIResponce.bookingid
    console.log('Booking Id : ' + bookingId)

    const getAPIResponce = await request.get(`/booking/${bookingId}`)

    // Validate Get status code, status text
    expect(getAPIResponce.status()).toBe(200)
    expect(getAPIResponce.statusText()).toBe('OK')

    const getAPIJsonResponce = await getAPIResponce.json()
    console.log('GET API Responce : ' + JSON.stringify(getAPIJsonResponce, null, 2))
})