import {Controller, Get} from 'routing-controllers'
// import { isMainThread } from 'worker_threads';

@Controller()
export default class {@Get('/test')
main(){
    return {
        hello: 'test'
    }
}


}
    