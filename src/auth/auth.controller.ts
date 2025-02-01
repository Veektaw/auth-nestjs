import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthPayloadDto } from 'src/auth/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() authPayloadDto: AuthPayloadDto) {
        const user = this.authService.validateUser(authPayloadDto);

        if (!user) throw new HttpException('Invalid credentials', 401);

        return user;
    }
}
