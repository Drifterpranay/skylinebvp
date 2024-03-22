package com.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.User;

@Service
public class UserDao  {
 
	@Autowired
private UserRepo userRepo;

public void register(User user) {
	userRepo.save(user);
}

public User getUserbyName(String name) {
	return userRepo.findbyName(name);
}
public User getUserbyEmail(String email) {
	return userRepo.findbyEmail(email);
}

public User getUserbyPassword(String password) {
	return userRepo.findbyPassword(password);
}

public User login(String email, String password) {
    return userRepo.login(email, password);
}

public User getUserbyId(int id) {
	return userRepo.findById(id).orElse(null);
}

public User getUserbyDelete(String name) {
	return userRepo.delete(name);
} 

public List<User> getAllUser() {
	return userRepo.findAll();
}
}
