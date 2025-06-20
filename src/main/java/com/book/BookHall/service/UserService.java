package com.book.BookHall.service;

import com.book.BookHall.model.Book;
import com.book.BookHall.model.User;
import com.book.BookHall.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public User register(User user){
        return userRepo.save(user);
    }

    public User login(String email){
        return userRepo.findByEmail(email);
    }

}

