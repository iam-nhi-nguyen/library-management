package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Borrower;
import com.management.library.repositories.BorrowerRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class BorrowerService extends CrudService<Borrower, Long> {
    private BorrowerRepository borrowerRepository;

    public BorrowerService(BorrowerRepository repository) {
        this.repository = this.borrowerRepository = repository;
    }

}
