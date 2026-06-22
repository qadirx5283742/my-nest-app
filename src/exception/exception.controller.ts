import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../filter/http-exception/http-exception.filter';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
  @Get('hello/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    return { Message: `Hello, your id is ${id}` };
  }
}
