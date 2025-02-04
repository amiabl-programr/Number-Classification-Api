const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

function isPrime(num) {
  if (num < 2) return false; 
  if (num === 2) return true; 
  if (num % 2 === 0) return false; 

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}


function isPerfect(num) {
  if (num < 1) return false;

  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }

  return sum === num;
}
function getDigitSum(num) {
  let sum = 0;
  while (num > 0) {
      sum += num % 10;  // Get last digit and add to sum
      num = Math.floor(num / 10); // Remove last digit
  }
  return sum;
}


function getProperties(num, text) {
  let properties = [];

  // Check if text contains the word "armstrong" (case-insensitive)
  if (typeof text === "string" && text.toLowerCase().includes("armstrong")) {
      properties.push("armstrong");
  }
  // Check if number is odd or even
  if (num % 2 === 0) {
      properties.push("even");
  } else {
      properties.push("odd");
  }

  return properties;
}


app.get('/api/classify-number', async (req, res) => {
  const number = parseInt(req.query.number);


  // Validate input
  if (isNaN(number)) {
    return res.status(400).json({
      number: req.query.number, // Keep original input
      error: true
    });
  }

  const url = `http://numbersapi.com/${number}/math`;

  try {
    const response = await fetch(url);
    const fact = await response.text();

    res.json({
      number: number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: getProperties(number, fact),
      digit_sum: getDigitSum(number),
      fun_fact: fact,
    });

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
