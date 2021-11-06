import * as actionTypes from "./Shopping-types";

const initial_state = {
  products: [
    {
        "id": "6180171cf2f0b945aee5a085",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM3MjQ3MjM=",
        "handle": "clay-plant-pot",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE0ODgwNTE=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/single-sprout-in-a-pot_925x_a2fda6d5-838f-4b90-80af-6e5931c30e32.jpg?v=1635538742"
            },
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE1MjA4MTk=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/pot-with-a-single-sprout_925x_cef24a3c-7954-4df2-9e42-b86821c1535c.jpg?v=1635538742"
            }
        ],
        "productType": "Outdoor",
        "tags": [
            "Plants",
            "Pot"
        ],
        "title": "Clay Plant Pot",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzI5OTk4NzYzNQ==",
                "title": "Regular",
                "quantityAvailable": 30,
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE0ODgwNTE=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/single-sprout-in-a-pot_925x_a2fda6d5-838f-4b90-80af-6e5931c30e32.jpg?v=1635538742"
                },
                "price": "9.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            },
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDAyMDQwMw==",
                "title": "Large",
                "quantityAvailable": 30,
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE1MjA4MTk=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/pot-with-a-single-sprout_925x_cef24a3c-7954-4df2-9e42-b86821c1535c.jpg?v=1635538742"
                },
                "price": "15.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:01.000Z",
        "publishedAt": "2021-10-29T22:07:20.000Z",
        "updatedAt": "2021-11-01T16:22:02.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a086",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM3NTc0OTE=",
        "handle": "copper-light",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE2MTkxMjM=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/copper-light-in-bedroom_925x_0e046af0-3c71-4d9e-a0c2-33c5333ee175.jpg?v=1635538743"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Bedroom",
            "Copper"
        ],
        "title": "Copper Light",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDA1MzE3MQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "75.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE2MTkxMjM=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/copper-light-in-bedroom_925x_0e046af0-3c71-4d9e-a0c2-33c5333ee175.jpg?v=1635538743"
                },
                "price": "59.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:03.000Z",
        "publishedAt": "2021-10-29T22:07:20.000Z",
        "updatedAt": "2021-11-01T16:22:46.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a087",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM3OTAyNTk=",
        "handle": "cream-sofa",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE2ODQ2NTk=",
                "width": 924,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/condominium-interior-livingroom_925x_cacbfdcb-f5d4-4e4d-aa59-f9ddbc836c3b.jpg?v=1635538744"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Couch",
            "Wood"
        ],
        "title": "Cream Sofa",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDA4NTkzOQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "750.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE2ODQ2NTk=",
                    "width": 924,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/condominium-interior-livingroom_925x_cacbfdcb-f5d4-4e4d-aa59-f9ddbc836c3b.jpg?v=1635538744"
                },
                "price": "500.0",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:04.000Z",
        "publishedAt": "2021-10-29T22:07:20.000Z",
        "updatedAt": "2021-11-01T16:23:11.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a088",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM4MjMwMjc=",
        "handle": "antique-drawers",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE3NTAxOTU=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/babys-room_925x_ffb562cf-1682-4c79-94dc-f5a471b5d85d.jpg?v=1635538746"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Antique",
            "Bedroom"
        ],
        "title": "Antique Drawers",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDExODcwNw==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "300.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE3NTAxOTU=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/babys-room_925x_ffb562cf-1682-4c79-94dc-f5a471b5d85d.jpg?v=1635538746"
                },
                "price": "250.0",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:06.000Z",
        "publishedAt": "2021-10-29T22:07:20.000Z",
        "updatedAt": "2021-11-01T16:19:33.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a089",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM4NTU3OTU=",
        "handle": "white-bed-clothes",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE5NDY4MDM=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/bright-hotel-room-bed_925x_cf959930-cbea-4662-86c3-1275084f446e.jpg?v=1635538747"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Bed"
        ],
        "title": "White Bed Clothes",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDE1MTQ3NQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "35.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE5NDY4MDM=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/bright-hotel-room-bed_925x_cf959930-cbea-4662-86c3-1275084f446e.jpg?v=1635538747"
                },
                "price": "29.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:07.000Z",
        "publishedAt": "2021-10-29T22:07:20.000Z",
        "updatedAt": "2021-11-01T16:27:10.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a08a",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM5MjEzMzE=",
        "handle": "pink-armchair",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODIwNDUxMDc=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/soft-pink-cushioned-armchair-in-stately-salon_925x_fd7453aa-b203-4e33-9760-92881e850404.jpg?v=1635538748"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Chair"
        ],
        "title": "Pink Armchair",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDIxNzAxMQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODIwNDUxMDc=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/soft-pink-cushioned-armchair-in-stately-salon_925x_fd7453aa-b203-4e33-9760-92881e850404.jpg?v=1635538748"
                },
                "price": "750.0",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:08.000Z",
        "publishedAt": "2021-10-29T22:07:20.000Z",
        "updatedAt": "2021-11-01T16:27:10.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a08b",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM5NTQwOTk=",
        "handle": "wooden-outdoor-table",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODIxNzYxNzk=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/cafe-patio_925x_f31d1515-931f-4a27-ab03-30e7f2deb154.jpg?v=1635538749"
            }
        ],
        "productType": "Outdoor",
        "tags": [
            "Garden",
            "Wood"
        ],
        "title": "Wooden Outdoor Table",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDI0OTc3OQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODIxNzYxNzk=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/cafe-patio_925x_f31d1515-931f-4a27-ab03-30e7f2deb154.jpg?v=1635538749"
                },
                "price": "99.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:09.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:27:23.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a08c",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM5ODY4Njc=",
        "handle": "brown-throw-pillows",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODIyNzQ0ODM=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/bedroom-bed-with-brown-throw-pillows_925x_95fda33d-6522-4d50-b575-56d22b0e276b.jpg?v=1635538751"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Pillows"
        ],
        "title": "Brown Throw Pillows",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDI4MjU0Nw==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "25.99",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODIyNzQ0ODM=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/bedroom-bed-with-brown-throw-pillows_925x_95fda33d-6522-4d50-b575-56d22b0e276b.jpg?v=1635538751"
                },
                "price": "19.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:11.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:21:02.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a08d",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQwMTk2MzU=",
        "handle": "white-ceramic-pot",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODI0NzEwOTE=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/house-plant-in-white-pot_925x_cba8ff83-db68-478f-b94f-f094815c6903.jpg?v=1635538752"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Plants",
            "Pot"
        ],
        "title": "White Ceramic Pot",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDMxNTMxNQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "30.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODI0NzEwOTE=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/house-plant-in-white-pot_925x_cba8ff83-db68-478f-b94f-f094815c6903.jpg?v=1635538752"
                },
                "price": "15.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:12.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:27:10.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a08e",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQwNTI0MDM=",
        "handle": "yellow-watering-can",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODI2MzQ5MzE=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/flowers-in-yellow-watering-can_925x_8982338a-f14b-4cc2-bd6e-574a6bf6552b.jpg?v=1635538753"
            }
        ],
        "productType": "Outdoor",
        "tags": [
            "Plants"
        ],
        "title": "Yellow watering can",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDM0ODA4Mw==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "50.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODI2MzQ5MzE=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/flowers-in-yellow-watering-can_925x_8982338a-f14b-4cc2-bd6e-574a6bf6552b.jpg?v=1635538753"
                },
                "price": "40.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:13.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:27:16.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a08f",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQwODUxNzE=",
        "handle": "gardening-hand-trowel",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODI3MDA0Njc=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/spring-gardening-set-up_925x_5cddd123-e792-4adf-960a-3aed09ce06de.jpg?v=1635538754"
            }
        ],
        "productType": "Outdoor",
        "tags": [
            "Plants"
        ],
        "title": "Gardening hand trowel",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDM4MDg1MQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "25.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODI3MDA0Njc=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/spring-gardening-set-up_925x_5cddd123-e792-4adf-960a-3aed09ce06de.jpg?v=1635538754"
                },
                "price": "10.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:14.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:23:36.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a090",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQxNTA3MDc=",
        "handle": "biodegradable-cardboard-pots",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODI3OTg3NzE=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/potted-seeds_925x_81848b82-a1b6-44aa-bc2f-bae015419e66.jpg?v=1635538755"
            }
        ],
        "productType": "Outdoor",
        "tags": [
            "Garden",
            "Plants"
        ],
        "title": "Biodegradable cardboard pots",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDQ0NjM4Nw==",
                "title": "Default Title",
                "quantityAvailable": 108,
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODI3OTg3NzE=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/potted-seeds_925x_81848b82-a1b6-44aa-bc2f-bae015419e66.jpg?v=1635538755"
                },
                "price": "20.0",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:15.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:18:21.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a091",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQxODM0NzU=",
        "handle": "grey-sofa",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODMwMjgxNDc=",
                "width": 924,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/large-grey-sofa-by-brick-wall_925x_ec798587-cb1c-4e03-ac63-c25eb445c78e.jpg?v=1635538756"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Sofa"
        ],
        "title": "Grey Sofa",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDQ3OTE1NQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "35.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODMwMjgxNDc=",
                    "width": 924,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/large-grey-sofa-by-brick-wall_925x_ec798587-cb1c-4e03-ac63-c25eb445c78e.jpg?v=1635538756"
                },
                "price": "29.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:16.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:24:03.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a092",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQyMTYyNDM=",
        "handle": "wooden-outdoor-slats",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODMyMjQ3NTU=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/house-plant-on-wooden-slat-wall_925x_f356154b-049a-4673-96d7-c2e2561cba30.jpg?v=1635538758"
            }
        ],
        "productType": "Outdoor",
        "tags": [
            "Garden",
            "Wood"
        ],
        "title": "Wooden outdoor slats",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDUxMTkyMw==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "35.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODMyMjQ3NTU=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/house-plant-on-wooden-slat-wall_925x_f356154b-049a-4673-96d7-c2e2561cba30.jpg?v=1635538758"
                },
                "price": "25.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:18.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:27:10.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a093",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQyNDkwMTE=",
        "handle": "wooden-fence",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODMzMjMwNTk=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/picket-fence-flowers_925x_c3a48ab1-1889-45b8-833f-aa06c121d09d.jpg?v=1635538759"
            }
        ],
        "productType": "Outdoor",
        "tags": [
            "Garden",
            "Wood"
        ],
        "title": "Wooden Fence",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDU0NDY5MQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "300.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODMzMjMwNTk=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/picket-fence-flowers_925x_c3a48ab1-1889-45b8-833f-aa06c121d09d.jpg?v=1635538759"
                },
                "price": "200.0",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:19.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:27:16.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a094",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQzNDczMTU=",
        "handle": "yellow-sofa",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODM0ODY4OTk=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/yellow-couch-by-black-and-white-mural_925x_c0f6f8a1-1fc9-4e43-bc41-bea499ada5b9.jpg?v=1635538760"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Sofa"
        ],
        "title": "Yellow Sofa",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDY3NTc2Mw==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "150.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODM0ODY4OTk=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/yellow-couch-by-black-and-white-mural_925x_c0f6f8a1-1fc9-4e43-bc41-bea499ada5b9.jpg?v=1635538760"
                },
                "price": "99.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:20.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:27:10.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a095",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQ0MTI4NTE=",
        "handle": "knitted-throw-pillows",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODM2ODM1MDc=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/yellow-sofa-with-throw-pillows_925x_62d811a2-8241-476c-8be7-ee796692efd3.jpg?v=1635538761"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Pillows"
        ],
        "title": "Knitted Throw Pillows",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDgzOTYwMw==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "25.99",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODM2ODM1MDc=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/yellow-sofa-with-throw-pillows_925x_62d811a2-8241-476c-8be7-ee796692efd3.jpg?v=1635538761"
                },
                "price": "19.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:21.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:27:08.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a096",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQ0NzgzODc=",
        "handle": "vanilla-candle",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODM3NDkwNDM=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/diy-organic-candle_925x_6e29779e-b764-4adf-97a7-4544648b56fe.jpg?v=1635538762"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Candle"
        ],
        "title": "Vanilla candle",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDkwNTEzOQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "30.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODM3NDkwNDM=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/diy-organic-candle_925x_6e29779e-b764-4adf-97a7-4544648b56fe.jpg?v=1635538762"
                },
                "price": "15.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:22.000Z",
        "publishedAt": "2021-10-29T22:07:21.000Z",
        "updatedAt": "2021-11-01T16:27:10.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a097",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQ1NDM5MjM=",
        "handle": "black-bean-bag",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODM4ODAxMTU=",
                "width": 925,
                "height": 740,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/comfortable-living-room-cat_925x_00ae5985-be3d-4142-a211-a803b474b02c.jpg?v=1635538763"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Black",
            "Leather"
        ],
        "title": "Black Beanbag",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDk3MDY3NQ==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "80.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODM4ODAxMTU=",
                    "width": 925,
                    "height": 740,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/comfortable-living-room-cat_925x_00ae5985-be3d-4142-a211-a803b474b02c.jpg?v=1635538763"
                },
                "price": "69.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:23.000Z",
        "publishedAt": "2021-10-29T22:07:22.000Z",
        "updatedAt": "2021-11-01T16:20:31.000Z"
    },
    {
        "id": "6180171cf2f0b945aee5a098",
        "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDQ1NzY2OTE=",
        "handle": "bedside-table",
        "images": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODQwNDM5NTU=",
                "width": 925,
                "height": 617,
                "altText": null,
                "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/dark-wall-bedside-table_925x_0a640d45-7352-4ffd-abfe-b2f0008bb304.jpg?v=1635538765"
            }
        ],
        "productType": "Indoor",
        "tags": [
            "Bedroom",
            "Wood"
        ],
        "title": "Bedside Table",
        "variants": [
            {
                "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMTAwMzQ0Mw==",
                "title": "Default Title",
                "quantityAvailable": 30,
                "compareAtPrice": "85.0",
                "image": {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODQwNDM5NTU=",
                    "width": 925,
                    "height": 617,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/dark-wall-bedside-table_925x_0a640d45-7352-4ffd-abfe-b2f0008bb304.jpg?v=1635538765"
                },
                "price": "69.99",
                "requiresShipping": true,
                "weightUnit": "KILOGRAMS"
            }
        ],
        "merchant": "617c5783a49149dd7609766f",
        "createdAt": "2021-10-29T20:19:24.000Z",
        "publishedAt": "2021-10-29T22:07:22.000Z",
        "updatedAt": "2021-11-01T16:19:46.000Z"
    }
],
  cart: [{
    "status": 200,
    "data": {
        "product": {
            "id": "6180171cf2f0b945aee5a085",
            "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM3MjQ3MjM=",
            "handle": "clay-plant-pot",
            "images": [
                {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE0ODgwNTE=",
                    "width": 925,
                    "height": 617,
                    "altText": null,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/single-sprout-in-a-pot_925x_a2fda6d5-838f-4b90-80af-6e5931c30e32.jpg?v=1635538742"
                },
                {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE1MjA4MTk=",
                    "width": 925,
                    "height": 617,
                    "altText": null,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/pot-with-a-single-sprout_925x_cef24a3c-7954-4df2-9e42-b86821c1535c.jpg?v=1635538742"
                }
            ],
            "productType": "Outdoor",
            "tags": [
                "Plants",
                "Pot"
            ],
            "title": "Clay Plant Pot",
            "variants": [
                {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzI5OTk4NzYzNQ==",
                    "title": "Regular",
                    "quantityAvailable": 30,
                    "image": {
                        "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE0ODgwNTE=",
                        "width": 925,
                        "height": 617,
                        "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/single-sprout-in-a-pot_925x_a2fda6d5-838f-4b90-80af-6e5931c30e32.jpg?v=1635538742"
                    },
                    "price": "9.99",
                    "requiresShipping": true,
                    "weightUnit": "KILOGRAMS"
                },
                {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDAyMDQwMw==",
                    "title": "Large",
                    "quantityAvailable": 30,
                    "image": {
                        "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE1MjA4MTk=",
                        "width": 925,
                        "height": 617,
                        "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/pot-with-a-single-sprout_925x_cef24a3c-7954-4df2-9e42-b86821c1535c.jpg?v=1635538742"
                    },
                    "price": "15.99",
                    "requiresShipping": true,
                    "weightUnit": "KILOGRAMS"
                }
            ],
            "merchant": "617c5783a49149dd7609766f",
            "createdAt": "2021-10-29T20:19:01.000Z",
            "publishedAt": "2021-10-29T22:07:20.000Z",
            "updatedAt": "2021-11-01T16:22:02.000Z"
        }
    }, qty: 1
}], //here I add the qty
  currentProduct: null,
};
const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod.productId === action.payload.productId
      );
      const inCart = state.cart.find((item) =>
        item.productId === action.payload.productId ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.productId === action.payload.productId
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
          ...state,
          cart: state.cart.filter(item => item.productId !== action.payload.productId)
      };
    case actionTypes.ADJUST_QTY:
      return {
          ...state,
          cart: state.cart.map(item => item.productId === action.payload.productId ? {...item, qyt:action.payload.qyt} : item)
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
          ...state,
          currentProduct: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
