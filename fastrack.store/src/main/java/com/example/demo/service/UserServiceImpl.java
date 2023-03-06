package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserDetails;
import com.example.demo.repository.UserDetailsRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDetailsRepository repository; 
	
	@Override
	public void addUser(UserDetails user) {
		// TODO Auto-generated method stub
		repository.save(user);
	}

	
	@Override
	public UserDetails getUser(String email,String password) {
		// TODO Auto-generated method stub
		UserDetails user= repository.findByEmailAndPassword(email,password);
		
	
		if(user == null) {
			return null;
		}
		
		return user;
	}

	@Override
	public UserDetails getUserByName(String name) {
		// TODO Auto-generated method stub
		Optional <UserDetails> user= repository.findByName(name);
		return user.get();
	}

	@Override
	public UserDetails updateUserPassword(Integer id,String newpassword) {
		Optional <UserDetails> optuser= repository.findById(id);
		
		UserDetails user = optuser.get();
		
		if(user != null) {
			user.setPassword(newpassword);
		}
		repository.save(user);
		return user == null ? null : repository.findById(id).get();
	}

	@Override
	public void deleteUser(Integer id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}


	
	

}
