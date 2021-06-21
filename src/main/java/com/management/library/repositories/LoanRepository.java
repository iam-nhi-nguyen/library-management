package com.management.library.repositories;

import com.management.library.core.CustomJpaRepository;
import com.management.library.models.Loan;

import java.util.List;

public interface LoanRepository extends CustomJpaRepository<Loan,Long>  {
    List<Loan> findAllByBorrowerId(Long id);
    List<Loan> findAllByBookId(Long id);
}
