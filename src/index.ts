import express, { Express, Request, Response } from "express"

const app: Express = express()

const port = process.env.PORT || 8080

app.get("/", (_req: Request, _res: Response) => {
  return _res.send("Express Typescript on Vercel")
})

app.get('/ping', (_req: Request, _res: Response) => {
    return _res.send("pong 😻") 
})

app.listen(port, () => {
    return console.log(`Server is running on port ${port}`)
})
