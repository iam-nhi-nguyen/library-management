package com.management.library.endpoints;

import com.management.library.core.CrudApiEndpoint;
import com.management.library.models.Author;
import com.management.library.services.AuthorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/author")
public class AuthorEndpoint extends CrudApiEndpoint<Author, Long> {

    private static Logger logger = LoggerFactory.getLogger(AuthorEndpoint.class);
    private AuthorService authorService;

    @Autowired
    public AuthorEndpoint(AuthorService service) {
        super(service);
        this.authorService = service;
        this.baseUrl = "/api/author";
    }

}
