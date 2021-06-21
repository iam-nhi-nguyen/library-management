package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Author;
import com.management.library.models.Book;
import com.management.library.models.Loan;
import com.management.library.repositories.BookRepository;
import com.management.library.repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BookService extends CrudService<Book, Long> {
    private BookRepository bookRepository;
    private LoanRepository loanRepository;

    @Autowired
    public void setLoanRepository(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    public BookService(BookRepository repository) {
        this.repository = this.bookRepository = repository;
    }

    @Override
    public Book get(Long id) {
        Book book = super.get(id);
        List<Loan> loanList = loanRepository.findAllByBookId(id);
        book.setLoanList(loanList);
        return book;
    }
}
