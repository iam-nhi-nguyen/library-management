package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Librarian;
import com.management.library.repositories.LibrarianRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LibrarianService extends CrudService<Librarian, Long> {
    private LibrarianRepository librarianRepository;


    public LibrarianService(LibrarianRepository repository) {
        this.repository = this.librarianRepository = repository;
    }
    public boolean validate(String userName, String password){
        Librarian libr=null;
        libr=librarianRepository.findLibrarianByUsernameAndPassword(userName, password);
        if(libr!=null) return true;
        return false;
    }

}
