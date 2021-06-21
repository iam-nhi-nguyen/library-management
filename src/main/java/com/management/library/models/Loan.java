package com.management.library.models;

import com.management.library.core.IdEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "loan")
public class Loan extends IdEntity {
    private Long borrowerId;
    private Long bookId;
    private String timeBorrow;
    private String timeReturn;

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

    public String getTimeBorrow() {
        return timeBorrow;
    }

    public void setTimeBorrow(String timeBorrow) {
        this.timeBorrow = timeBorrow;
    }

    public String getTimeReturn() {
        return timeReturn;
    }

    public void setTimeReturn(String timeReturn) {
        this.timeReturn = timeReturn;
    }
}
