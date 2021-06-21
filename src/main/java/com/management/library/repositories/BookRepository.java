package com.management.library.repositories;

import com.management.library.core.CustomJpaRepository;
import com.management.library.models.Book;

public interface BookRepository extends CustomJpaRepository<Book,Long> {
}
