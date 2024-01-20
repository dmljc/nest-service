import { IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsNotEmpty({ message: '账号不为空' })
    username: string;

    @IsNotEmpty({ message: '密码不为空' })
    password: string;
}
