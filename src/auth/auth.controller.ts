import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    // injecting AuthService
    private readonly authService: any,
  ) {}
}
