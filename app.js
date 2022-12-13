const express = require('express')
const app = express()
app.set('view engine', 'pug')

app.set('views', './views')
app.use(express.static('img'))
app.use(express.static('css'))

app.get('/',(req,res) =>
{
    res.render("home")
})

app.get('/contact', (req,res) => {
    res.render("contact")
    })
app.get("/skills",(req,res) =>
{
    res.render("skills")
})
app.get("/about",(req,res) =>
{
    res.render("about")
})
app.listen(3000, () =>
{
    console.log("server is running at 3000");
})
