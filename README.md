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
https://number-classification-api-chi.vercel.app/api/classify-number?number=28
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
## Error Handling
### Invalid Input (Non-numeric)
```json
{
    "number": "abc",
    "error": true
}
```
### Server Error (API Failure)
```json
{
    "error": "Error fetching data"
}
```

## Setup Instructions
1. Install dependencies:
   ```ssh
   npm install express cors
   ```
2. Run the server:
   ```ssh
   node api/classify-number.js
   ```
3. Open the API in your browser:
   ```ssh
   http://localhost:3000/api/classify-number?number=28
   ```
   **Note:** Ensure you are on the right port!
