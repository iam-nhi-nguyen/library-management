package com.management.library.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "borrower")
public class Borrower extends Person {
    private String position;

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
