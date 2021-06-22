package com.management.library.models;

import com.management.library.core.IdEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "loan")
public class Loan extends IdEntity {
    private Long borrowerId;
    private Long bookId;
    private Long timeBorrow;
    private Long timeReturn;

    @Transient
    private Borrower borrower = null;
    @Transient
    private Book book = null;

    public Long getBorrowerId() {
        return borrowerId;
    }

    public void setBorrowerId(Long borrowerId) {
        this.borrowerId = borrowerId;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public Long getTimeBorrow() {
        return timeBorrow;
    }

    public void setTimeBorrow(Long timeBorrow) {
        this.timeBorrow = timeBorrow;
    }

    public Long getTimeReturn() {
        return timeReturn;
    }

    public void setTimeReturn(Long timeReturn) {
        this.timeReturn = timeReturn;
    }

    public Borrower getBorrower() {
        return borrower;
    }

    public void setBorrower(Borrower borrower) {
        this.borrower = borrower;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
