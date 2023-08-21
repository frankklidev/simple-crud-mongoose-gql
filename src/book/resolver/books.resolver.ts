 
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Book } from '../model/book.model';
import { BookService } from '../service/books.service';
import { BookInput } from '../dto/book.input';

@Resolver(() => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService) { }

    @Query(() => [Book]) 
    async books(): Promise<Book[]> {
      return this.bookService.findAll(); 
    }
    

    @Mutation(() => Book)
    async createBook(@Args('input') input: BookInput): Promise<Book> {
        const book = await this.bookService.create(input);
        console.log(book); 
        return book;
    }
    
    @Mutation(() => Book)
    async updateBook(
        @Args('id', { type: () => ID }) id: string,
        @Args('input') input: BookInput,
    ): Promise<Book> {
        return this.bookService.update(id, input);
    }

    @Mutation(() => Book)
    async deleteBook(@Args('id', { type: () => ID }) id: string): Promise<Book> {
        return this.bookService.delete(id);
    }
}
 

