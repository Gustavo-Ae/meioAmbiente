const express = require('express');
const cors = require('cors')

const projetoRouter = require("./routes/projetoRouter")

const authRouter = require("./routes/authRoutes")

const usuarioRouter = require("./routes/usuarioRouter")

const investimentoRouter = require("./routes/investimentoRoutes")

const creditoCarbonoRouter = require("./routes/creditoCarbonoRoutes")

let corsOptions = {
    origin: '*',
    credentials: false,
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}

const server = express();
const port = process.env.PORT || 5450;
server.use(express.json())
server.use(cors(corsOptions))

server.use("/", projetoRouter)

server.use("/", usuarioRouter)

server.use("/", investimentoRouter)

server.use("/",creditoCarbonoRouter)

server.use("/", authRouter)

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
