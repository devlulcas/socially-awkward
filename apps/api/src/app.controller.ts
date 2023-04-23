import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      data: {
        name: 'Socially Awkward API',
        description: 'A simple API for a social media app',
        version: '0.0.1',
        author: '@devlulcas',
        license: 'MIT',
      },
    };
  }
}
