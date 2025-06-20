package com.book.BookHall.controller;

import com.book.BookHall.model.Book;
import com.book.BookHall.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
    @Autowired
    AdminService adminService;
    @PostMapping("/addBook")
    public ResponseEntity<?> addBook(@RequestPart Book book,@RequestPart MultipartFile image){
        try {
            Book b = adminService.insert(book, image);
            return new ResponseEntity<>(b, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateBook{id}")
    public ResponseEntity<?> updateBook(@RequestPart Book book,@PathVariable int id, @RequestPart  MultipartFile image){
        Book b=adminService.getBookId(id);
        b.setBookName(book.getBookName());
        b.setImageData(book.getImageData());
        b.setImageType(book.getImageType());
        b.setAuthor(book.getAuthor());
        b.setProductAvailable(book.isProductAvailable());
        b.setDescription(book.getDescription());
        b.setPrice(book.getPrice());
        b.setStockQuantity(book.getStockQuantity());
        b.setReleaseDate(book.getReleaseDate());
        b.setImageName(book.getImageName());
        try {
            Book bDemo = adminService.insert(book, image);
            return new ResponseEntity<>(bDemo, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    

}
