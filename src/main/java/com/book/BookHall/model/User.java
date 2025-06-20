package com.book.BookHall.model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(nullable = false, length = 50)
    private String userName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(length = 15)
    private String phoneNumber;

    @Column(nullable = false)
    private String password;

    @Column(length = 200)
    private String address;

    @Column(nullable = false)
    private String role;  // ✅ "ADMIN" or "USER"

    public User() {}

    public User(int userId, String userName, String email, String phoneNumber, String password, String address, String role) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.address = address;
        this.role = role;
    }

    public User(String userName, String email, String phoneNumber, String password, String address, String role) {
        this.userName = userName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.address = address;
        this.role = role;
    }

    @Override
    public String toString() {
        return "User [userId=" + userId + ", userName=" + userName + ", email=" + email +
                ", phoneNumber=" + phoneNumber + ", password=" + password + ", address=" + address + ", role=" + role + "]";
    }

    // Getters
    public int getUserId() { return userId; }
    public String getUserName() { return userName; }
    public String getEmail() { return email; }
    public String getPhoneNumber() { return phoneNumber; }
    public String getPassword() { return password; }
    public String getAddress() { return address; }
    public String getRole() { return role; }

    // Setters
    public void setUserId(int userId) { this.userId = userId; }
    public void setUserName(String userName) { this.userName = userName; }
    public void setEmail(String email) { this.email = email; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    public void setPassword(String password) { this.password = password; }
    public void setAddress(String address) { this.address = address; }
    public void setRole(String role) { this.role = role; }
}
