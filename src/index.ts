import express from 'express'
import fs from 'fs/promises'

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {

    const bancodedados = await fs.readFile('bancodedados.json')

    const resultado = JSON.parse(bancodedados.toString())



    return res.json(resultado)
})

app.listen(3000)