
import fetch from 'node-fetch';
import express from 'express';
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get('/getUserMalePercentage/:number', async (req, res) => {
    try {
      const { number } = req.params
      console.log(number)
      const apiResponse = await fetch(
        'https://gorest.co.in/public/v2/users'
      )
      const apiResponseJson = await apiResponse.json()
      const filterArray = apiResponseJson.slice(0, number)
      const percentage = filterArray.filter(elem => elem.gender === "male").length *100/filterArray.length;

      res.send(percentage + '%')
    } catch (err) {
      console.log(err)
      res.status(500).send('Something went wrong')
    }
  })