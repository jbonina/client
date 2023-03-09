import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { randomInt } from 'crypto';
import {CreateErrorLogDTO} from './create-error-log.dto';

@Injectable()
export class AppService {
  constructor(@Inject('ERROR_LOG_SERVICE') private client: ClientProxy){}

  getHello(): string {
    return 'Hello World!';
  }

  async addErrorLogEvent() {
    //this.client.emit('error-log-added', {'DateTime': new Date(), 'bookName': 'The Way Of Kings', 'author': 'Brandon Sanderson'});
    var dto : CreateErrorLogDTO = { 
   
      errorMsg:" Cannot read properties of null (reading 'status')",

      errorStackTrace: "[Nest] 23380  - 05/03/2023, 11:11:48   ERROR [RpcExceptionsHandler] Cannot read properties of null (reading 'status') \
      TypeError: Cannot read properties of null (reading 'status') \
          at AppController.create (F:\dev\ErrorLogService\service-nest\src\app.controller.ts:46:22) \
          at processTicksAndRejections (node:internal/process/task_queues:95:5) \
          at F:\dev\ErrorLogService\service-nest\node_modules\@nestjs\microservices\context\rpc-proxy.js:11:32 \
          at ServerRMQ.handleEvent (F:\dev\ErrorLogService\service-nest\node_modules\@nestjs\microservices\server\server.js:71:32)",
  
      IPAddress: "192.168.1.100",
  
      Port: 3001,
  
      ExtIPAddress: "8.8.8.8",
  
      ExtPort: 80,
  
      ServernameFQDN: "myapplication.mydomain.com",
  
      ApplicationName: "AccountingApp",
  
      ApplicationVersion: "v1.10-PRODUCTION",
  
      ApplicationErrorLevel: randomInt(5),

      DateTime: new Date()
    };
    
    this.client.emit('error-log-added', dto);
  }
}
