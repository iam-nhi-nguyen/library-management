package com.management.library.endpoints;

import com.management.library.core.CrudApiEndpoint;
import com.management.library.models.Loan;
import com.management.library.services.LoanService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/loan")
public class LoanEndpoint extends CrudApiEndpoint<Loan, Long> {

    private static Logger logger = LoggerFactory.getLogger(LoanEndpoint.class);
    private LoanService loanService;

    @Autowired
    public LoanEndpoint(LoanService service) {
        super(service);
        this.loanService = service;
        this.baseUrl = "/api/loan";
    }


}
