import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    @InjectRepository(User)
    private userRepository: Repository<User>;

    async create(createUserDto: CreateUserDto) {
        return await this.userRepository.save(createUserDto);
    }

    async login(loginDto: LoginDto) {
        const existUser = await this.userRepository.findOneBy({
            username: loginDto.username,
        });

        if (!existUser) {
            throw new HttpException('用户不存在', HttpStatus.OK);
        }

        // if(existUser.password !== md5(user.password)) {
        //     throw new HttpException('密码错误', 200);
        //   }
        return !!existUser;
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async findOne(id: number) {
        return await this.userRepository.findOneBy({ id });
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.userRepository.update(id, updateUserDto);
    }

    async remove(id: number) {
        return await this.userRepository.delete(id);
    }
}
