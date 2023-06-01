import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        // console.log(request);
        return 'all cats';
    }
}
