package com.management.library.endpoints;

import com.management.library.core.CrudApiEndpoint;
import com.management.library.models.Borrower;
import com.management.library.services.BorrowerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/borrower")
public class BorrowerEndpoint extends CrudApiEndpoint<Borrower, Long> {

    private static Logger logger = LoggerFactory.getLogger(BorrowerEndpoint.class);
    private BorrowerService borrowerService;

    @Autowired
    public BorrowerEndpoint(BorrowerService service) {
        super(service);
        this.borrowerService = service;
        this.baseUrl = "/api/borrower";
    }

}
