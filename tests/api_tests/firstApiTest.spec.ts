import {test, expect} from '@playwright/test'


test('get all product list and verify', async ({page, request}) =>{
    const response = await request.get("https://automationexercise.com/api/productsList")
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    expect(JSON.stringify(responseBody.products[1].price)).toContain("Rs. 400")

})

test('get all brands list and verify', async ({page, request}) =>{
    const response = await request.get("https://automationexercise.com/api/brandsList")
    expect(response.status()).toBe(200)

    const responseBody = await response.json()
    const responseBodyBrandsCount = Object.keys(responseBody.brands).length
    var brandArray = new Array()
    for(let i=0; i<responseBodyBrandsCount;i++){
       // console.log(responseBody.brands[i].brand)
        brandArray.push(responseBody.brands[i].brand)
    }

    console.log(brandArray[10])


})

test('post to all products list and verify error', async ({request}) =>{
    const response = await request.post("https://automationexercise.com/api/productsList")
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    expect(responseBody.message).toContain("This request method is not supported.")
})

test('post to search for product in list', async ({request})=>{
    const response = await request.post("https://automationexercise.com/api/searchProduct", {
        data: 
        {
            "search_product": "top"
        }
    })
    console.log(response.status())
    const responseBody = await response.json()
    console.log(responseBody)
})

const API_BASE_URL = 'https://apichallenges.eviltester.com/sim/entities'


test('GET ALL ENTITIES', async ({request})=>{
    const response = await request.get(API_BASE_URL)
    //expect(response.status()).toBe(200)
    console.log(response.status())
    const responseBody = await response.json()
    console.log(responseBody)
})

test('POST AN ENTITY', async ({request})=>{
    const response = await request.post(API_BASE_URL, {
        data: {
            "name":"bob",
            "description":"just a test"
        }
    })
    //expect(response.status()).toBe(200)
    console.log(response.status())
    const responseBody = await response.json()
    console.log(responseBody)

    const responseGet = await request.get(API_BASE_URL+"/11")
    console.log(responseGet.status())
    const responseBodyGet = await responseGet.json()
    console.log(responseBodyGet)
})

test('USE POST TO AMEND AN ENTITY AND GET RESULT', async ({request})=>{
    const response = await request.post(API_BASE_URL+"/10", {
        data: {
            "name":"eris"
        }
    })

    const responseBody = await response.json()
    console.log(response.status())
    console.log(responseBody)

    const responseGet = await request.get(API_BASE_URL+"/10")
    const responseBodyGet = await responseGet.json()
    console.log(responseGet.status())
    console.log(responseBodyGet)


})

test('USING PUT TO AMEND AN ENTITY', async ({request})=>{
    const response = await request.put(API_BASE_URL+"/10", {
        data:{
            "name":"eris"
        }
    })

    const responseBody = await response.json()
    console.log(response.status())
    console.log(responseBody)
})

test('DELETING AN ENTITY', async ({request})=>{
    const response = await request.delete(API_BASE_URL+"/9")
    //const responseBody = await response.json()
    console.log(response.status())
   // console.log(responseBody)

   const responseGet = await request.get(API_BASE_URL+"/9")
   console.log(response.status())
   const responseBody = await responseGet.json()
   console.log(responseBody)
   expect(responseBody.errorMessages).toContain('Could not find Entity with ID 9')

})


const HTTP_BIN_BASE_URL = 'https://httpbin.org/'

test('HTTP BIN VERBS TEST', async ({request})=>{
    const responseGet = await request.get(HTTP_BIN_BASE_URL)
    console.log(responseGet.status())
    const responseGetBody = await responseGet.body()
    console.log(responseGetBody)
})

test('HTTP BIN AUTH TEST', async ({request})=>{
    const responseGet = await request.get(HTTP_BIN_BASE_URL+"basic-auth/ABC/DEF", {
        data:{
            "user":"ABC",
            "passwd":"DEF"
        }
    })
    console.log(responseGet.status())
    const responseGetBody = await responseGet.body()
    console.log(responseGetBody)
})
