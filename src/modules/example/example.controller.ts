import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ExampleController {
  constructor(
    private readonly appService: ExampleService
  ) {}

  @EventPattern('example.topic')
  public getHello(@Payload() message: any) {
    console.log(message);
    this.appService.getHello();
  }
}
