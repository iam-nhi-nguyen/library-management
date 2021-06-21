package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Loan;
import com.management.library.repositories.LoanRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LoanService extends CrudService<Loan, Long> {
    private LoanRepository loanRepository;

    public LoanService(LoanRepository repository) {
        this.repository = this.loanRepository = repository;
    }

}
