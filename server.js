const express = require('express');
const app = express();

const Film = {
    title : "Oppenheimer",
    director: "Christopher Nolan",
    year : "2023",
}
app.get('/', (req, res) => {
res.json(Film);
});
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}...`);
});