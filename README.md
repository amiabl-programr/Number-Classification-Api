# Number-Classification-Api

## Overview
A simple API that classifies a number based on its mathematical properties.

## Features
- Check if a number is prime.
- Check if a number is perfect.
- Determines if it's odd or even.
- Identifies if the input text contains "armstrong."
- Calculates the sum of its digits.
- Fetches a fun fact about the number.

## API Endpoint
```ssh
GET /api/classify-number?number=371
```
## Request Example
```ssh
GET http://localhost:3000/api/classify-number?number=28
```
## Response Example
```json
{
    "number": 28,
    "is_prime": false,
    "is_perfect": true,
    "properties": ["even"],
    "digit_sum": 10,
    "fun_fact": "28 is the second perfect number."
}
```
