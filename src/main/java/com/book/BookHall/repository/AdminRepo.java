package com.book.BookHall.repository;

import com.book.BookHall.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<Book,Integer> {
}
