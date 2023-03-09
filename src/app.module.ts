import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'ERROR_LOG_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://192.168.1.240:5672'],
        queue: 'error_logs_queue',
        queueOptions: {
          durable: false
        }
      }
    }]),
    ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
