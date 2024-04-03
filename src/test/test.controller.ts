import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post() // test
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get() // test?sub=maths
  findAll(@Query('sub') sub?: string) {
    return this.testService.findAll(sub);
  }

  /**
   * Here order of the route matters for routes @Get('subtest') and @Get(':id')
   */

  @Get('subtest') // test/subtest
  findSubtest() {
    return this.testService.subtest();
  }

  @Get(':id') // test/1234
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id') // test/1234
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id') // test/1234
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
