package com.management.library.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "borrower")
public class Borrower extends Person {
    private String position;

    @Transient
    private List<Loan> loanList = new ArrayList();

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public List<Loan> getLoanList() {
        return loanList;
    }

    public void setLoanList(List<Loan> loanList) {
        this.loanList = loanList;
    }
}
