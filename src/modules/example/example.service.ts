import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ExampleService  {

  constructor(
    // @Inject('EXAMPLE_SERVICE')
    // private readonly exampleClient: ClientKafka
  ) { }

  public getHello(): string {
    return 'Hello World!';
  }
}
