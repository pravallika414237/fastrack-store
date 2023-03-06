package com.example.demo.service;

import com.example.demo.model.UserDetails;

public interface UserService {





public UserDetails getUserByName(String name);

public UserDetails updateUserPassword(Integer id,String newpassword);

public void deleteUser(Integer id);



public UserDetails getUser(String email, String password);

void addUser(UserDetails user);


}
