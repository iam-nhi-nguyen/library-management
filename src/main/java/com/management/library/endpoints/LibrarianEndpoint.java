package com.management.library.endpoints;

import com.management.library.core.rsql.CrudApiEndpoint;
import com.management.library.models.Librarian;
import com.management.library.services.LibrarianService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/librarian")
public class LibrarianEndpoint extends CrudApiEndpoint<Librarian, Long> {

    private static Logger logger = LoggerFactory.getLogger(LibrarianEndpoint.class);
    private LibrarianService librarianService;

    @Autowired
    public LibrarianEndpoint(LibrarianService service) {
        super(service);
        this.librarianService = service;
        this.baseUrl = "/api/librarian";
    }

}
