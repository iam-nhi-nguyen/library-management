package com.management.library.services;

import com.management.library.core.CrudService;
import com.management.library.models.Position;
import com.management.library.repositories.PositionRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class PositionService extends CrudService<Position, Long> {
    private PositionRepository positionRepository;

    public PositionService(PositionRepository repository) {
        this.repository = this.positionRepository = repository;
    }

}
