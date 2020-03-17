import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { ExampleModule } from './example/example.module';
import { FrameworkModule } from './framework/framework.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    FrameworkModule,
    ExampleModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
