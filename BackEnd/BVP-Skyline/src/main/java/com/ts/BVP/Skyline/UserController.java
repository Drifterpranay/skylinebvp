package com.ts.BVP.Skyline;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Dao.UserDao;
import com.Model.User;


@RestController
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private UserDao userDao;
        
	
		@PostMapping("register")
		public void register(@RequestBody User user) {
			System.out.println("data recived : "+user);
		    userDao.register(user);	
		}
		
		@GetMapping("showUserById/{id}")
		public User showUserById(@PathVariable("id") int id) {
		  return userDao.getUserbyId(id);	
		}
		
		
		@GetMapping("showUserByName/{Name}")
		public User showUserByName(@PathVariable("Name") String Name) {
		  return userDao.getUserbyName(Name);	
		}
		
		@GetMapping("showUserByEmail/{email}")
		public User showUserByEmaill(@PathVariable("email") String email) {
		  return userDao.getUserbyEmail(email);	
		}
		
		@GetMapping("showUserByPassword/{password}")
		public User showUserByPassword(@PathVariable("password") String password) {
		  return userDao.getUserbyPassword(password);	
		}
		
		@GetMapping("login/{email}/{password}")
		public User login(@PathVariable("email") String email, @PathVariable("password") String password) {
		    return userDao.login(email, password);
		}
		
		@DeleteMapping("DeleteUserByName/{Name}")
		public User DeleteUserByName(@PathVariable("Name") String Name) {
		  return userDao.getUserbyDelete(Name);	
		} 
		
		@GetMapping("showAllUser")
		public List<User> showAllUser(){
			return userDao.getAllUser();
		}
		
}
