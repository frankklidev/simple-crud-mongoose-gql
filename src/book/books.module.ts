import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BookService } from './service/books.service';
import { BookResolver } from './resolver/books.resolver';
import { Book, BookSchema } from './model/book.model';

@Module({
    providers: [
        BookService,
        BookResolver
    ],
    imports: [MongooseModule.forFeature([
        {
            name: Book.name,
            schema: BookSchema,
        },
    ]),
  ],
})

export class BooksModule {}