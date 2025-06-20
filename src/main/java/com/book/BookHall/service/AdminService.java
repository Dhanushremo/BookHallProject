package com.book.BookHall.service;

import com.book.BookHall.model.Book;
import com.book.BookHall.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    AdminRepo adminRepo;

    public Book insert(Book book, MultipartFile image) throws IOException {
        book.setImageName(image.getOriginalFilename());
        book.setImageType(image.getContentType());
        book.setImageData(image.getBytes());
       return adminRepo.save(book);
    }


    public List<Book> getAllBooks() {
        return adminRepo.findAll();
    }

    public Book getBookId(int id) {
        return adminRepo.findById(id).orElse(null);
    }

}
