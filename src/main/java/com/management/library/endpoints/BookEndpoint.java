package com.management.library.endpoints;

import com.management.library.core.CrudApiEndpoint;
import com.management.library.models.Book;
import com.management.library.services.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/book")
public class BookEndpoint extends CrudApiEndpoint<Book, Long> {

    private static Logger logger = LoggerFactory.getLogger(BookEndpoint.class);
    private BookService bookService;

    @Autowired
    public BookEndpoint(BookService service) {
        super(service);
        this.bookService = service;
        this.baseUrl = "/api/book";
    }

}
