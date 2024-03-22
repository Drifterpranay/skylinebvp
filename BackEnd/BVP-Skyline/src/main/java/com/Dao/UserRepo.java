package com.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.Model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer>{
@Query("SELECT e FROM User e WHERE e.name = :name")
User findbyName(@Param("name")String name);

@Query("SELECT e FROM User e WHERE e.email = :email")
User findbyEmail(@Param("email")String email);

@Query("SELECT e FROM User e WHERE e.password = :password")
User findbyPassword(@Param("password")String passsword);
 
@Query("SELECT e FROM User e WHERE e.email = :email AND e.password = :password")
public User login(@Param("email") String email,@Param("password")String password);

@Query("SELECT e FROM User e WHERE e.name = :name ")
public User delete(@Param("name") String name);



}