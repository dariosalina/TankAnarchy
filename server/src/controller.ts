import {Controller, Get} from 'routing-controllers'
// import { isMainThread } from 'worker_threads';

@Controller()
export default class {
    
@Get('/')
main(){
    
    return {
        hello: 'test'
    }
  }
}

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
//   });
