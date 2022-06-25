import { getGifts } from "../../src/utils"

test('@Test for getGifts()', () => {
    const expectedData = {"bici": 3, "coche": 2, "pelota": 1, "peluche": 1 }
    const giftsResult = getGifts()
    expect(giftsResult).toEqual(expectedData)
})