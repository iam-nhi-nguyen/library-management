package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Borrower;
import com.management.library.models.Loan;
import com.management.library.repositories.BorrowerRepository;
import com.management.library.repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BorrowerService extends CrudService<Borrower, Long> {
    private BorrowerRepository borrowerRepository;
    private LoanRepository loanRepository;

    @Autowired
    public void setLoanRepository(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    public BorrowerService(BorrowerRepository repository) {
        this.repository = this.borrowerRepository = repository;
    }

    @Override
    public Borrower get(Long id) {
        Borrower borrower = super.get(id);
        List<Loan> loanList = loanRepository.findAllByBorrowerId(id);
        borrower.setLoanList(loanList);
        return borrower;
    }
}
