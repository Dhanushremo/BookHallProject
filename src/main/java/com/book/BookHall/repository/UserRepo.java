package com.book.BookHall.repository;

import com.book.BookHall.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    public User findByEmail(String email);
}
