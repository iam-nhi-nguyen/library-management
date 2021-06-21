package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Book;
import com.management.library.repositories.BookRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class BookService extends CrudService<Book, Long> {
    private BookRepository bookRepository;

    public BookService(BookRepository repository) {
        this.repository = this.bookRepository = repository;
    }

}
