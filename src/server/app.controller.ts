import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  root(): any {
    return 'typescript-vue-webpack-boilerplate';
  }
}
