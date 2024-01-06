import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    @InjectRepository(User)
    private userRepository: Repository<User>;

    async create(createUserDto: CreateUserDto) {
        await this.userRepository.save(createUserDto);
        return {
            status: 200,
        };
    }

    async findAll() {
        const resp = await this.userRepository.find();
        return {
            list: resp,
            status: 200,
        };
    }

    async findOne(id: number) {
        // return await this.userRepository.findOneBy(id);
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        console.log('-----updateUserDto--->', id, updateUserDto);
        return await this.userRepository.update(id, updateUserDto);
    }

    async remove(id: number) {
        const resp = await this.userRepository.delete(id);
        return {
            data: !!resp?.affected,
            status: 200,
        };
    }
}
