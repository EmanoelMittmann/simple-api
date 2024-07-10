import { MainFactory } from "./factories/main.factory";


const main = new MainFactory({
    port: 3000,
    cors: true
})

main.Init_application()  