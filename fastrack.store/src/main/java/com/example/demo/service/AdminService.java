package com.example.demo.service;

import com.example.demo.model.AdminDetails;
import com.example.demo.model.UserDetails;

public interface AdminService {
	
	//public AdminDetails getUser(String email, String password);

	AdminDetails getAdmin(String email, String password);
}
