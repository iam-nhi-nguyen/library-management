package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Author;
import com.management.library.repositories.AuthorRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class AuthorService extends CrudService<Author, Long> {
    private AuthorRepository authorRepository;

    public AuthorService(AuthorRepository repository) {
        this.repository = this.authorRepository = repository;
    }

}
