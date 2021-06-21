package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Book;
import com.management.library.models.Borrower;
import com.management.library.models.Loan;
import com.management.library.repositories.BookRepository;
import com.management.library.repositories.BorrowerRepository;
import com.management.library.repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class LoanService extends CrudService<Loan, Long> {
    private LoanRepository loanRepository;
    private BorrowerRepository borrowerRepository;
    private BookRepository bookRepository;

    @Autowired
    public void setBorrowerRepository(BorrowerRepository borrowerRepository) {
        this.borrowerRepository = borrowerRepository;
    }
    @Autowired
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public LoanService(LoanRepository repository) {
        this.repository = this.loanRepository = repository;
    }

    @Override
    public Loan get(Long id) {
        Loan loan = super.get(id);
        Borrower borrower = borrowerRepository.findFirstById(loan.getBorrowerId());
        loan.setBorrower(borrower);
        Book book = bookRepository.findFirstById(loan.getBookId());
        loan.setBook(book);
        return loan;
    }
}
