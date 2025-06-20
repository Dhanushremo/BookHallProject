package com.book.BookHall.controller;

import com.book.BookHall.model.Book;
import com.book.BookHall.model.User;
import com.book.BookHall.service.AdminService;
import com.book.BookHall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private AdminService adminService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody User user) {
        User savedUser = userService.register(user);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("userId", savedUser.getUserId());
        response.put("message", "User registered successfully");
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody User user) {
        User foundUser = userService.login(user.getEmail());
        Map<String, Object> response = new HashMap<>();
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            response.put("success", true);
            response.put("user", foundUser);
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @GetMapping("/getBooks")
    public ResponseEntity<?> getBooks() {
        try {
            List<Book> books = adminService.getAllBooks();
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getBooks/{id}/imgae")
    public ResponseEntity<byte[]> getImage(@PathVariable int id){
       Book b = adminService.getBookId(id);
       byte[] imageFile=b.getImageData();
       return ResponseEntity.ok()
               .contentType(MediaType.valueOf(b.getImageType()))
               .body(imageFile);
    }

}
