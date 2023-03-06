package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.AdminDetails;
import com.example.demo.model.UserDetails;
import com.example.demo.repository.AdminRepository;


@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository repository;

	@Override
	public AdminDetails getAdmin(String email, String password) {
	
		AdminDetails admin = repository.findByAdminEmailAndAdminPassword(email, password);
		
		if(admin == null) {
			return null;
		}
		return admin;
	}

	public AdminDetails getUserByName(String username) {
		Optional <AdminDetails> user= repository.findByAdminName(username);
		return user.get();
		
	}
}
