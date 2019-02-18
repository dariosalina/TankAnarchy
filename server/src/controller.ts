import {Controller, Get} from 'routing-controllers'

@Controller()
export default class MainController {

    @Get("/hello")
    main() {
       return {
         hello: 'World'
       }
    }

}
// io.on('connection', function(socket) {

//   console.log(`User  just connected`)

//   socket.on('disconnect', () => {
//     console.log(`User  just disconnected`)}
// )});