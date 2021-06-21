package com.management.library.endpoints;

import com.management.library.core.CrudApiEndpoint;
import com.management.library.models.Position;
import com.management.library.services.PositionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/position")
public class PositionEndpoint extends CrudApiEndpoint<Position, Long> {

    private static Logger logger = LoggerFactory.getLogger(PositionEndpoint.class);
    private PositionService positionService;

    @Autowired
    public PositionEndpoint(PositionService service) {
        super(service);
        this.positionService = service;
        this.baseUrl = "/api/position";
    }

}
