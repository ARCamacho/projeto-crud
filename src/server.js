const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(path.join(___dirname, 'public')))

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Server'
    })
})

app.use((req, res) => {
    res.send('Pagina não encontrado')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is linstenig on port ${port}`))

