import { injectable } from 'inversify';
import { createConnection, getManager, Repository } from 'typeorm';

import { Config } from '../config/Config';

import { Comment } from '../models/Comment';
import { User } from '../models/User';
import { UserLocation } from '../models/UserLocation';
import { Vote } from '../models/Vote';

export interface CommentRepository {
    create(comment: Comment): Promise<Comment>;
    update(comment: Comment): Promise<Comment>;
    delete(comment: Comment): Promise<void>;
}

@injectable()
export class CommentRespositoryImpl implements CommentRepository {
    private commentRespostory: Repository<Comment>;

    constructor() {
        this.commentRespostory = getManager().getRepository(Comment);
    }
    public async create(comment: Comment): Promise<Comment> {
        return await this.commentRespostory.save(comment);
    }
    public async update(comment: Comment): Promise<Comment> {
        return await this.commentRespostory.save(comment);
    }
    public async delete(comment: Comment): Promise<void> {
        return await this.commentRespostory.delete(comment);
    }
}