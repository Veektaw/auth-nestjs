import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from 'src/auth/dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalAuthGuard)  // For the local auth strategy
    // login(@Body() authPayloadDto: AuthPayloadDto) {
    //     const user = this.authService.validateUser(authPayloadDto);

    //     if (!user) throw new HttpException('Invalid credentials', 401);

    //     return user;
    // }
    login(@Req() req: Request) {
        return req.user;
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)  // For the jwt auth strategy
    status(@Req() req: Request) {
        req.user
    }
}
