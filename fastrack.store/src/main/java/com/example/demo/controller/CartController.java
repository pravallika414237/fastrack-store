package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ProductDetails;
import com.example.demo.model.UserDetails;
import com.example.demo.service.CartServiceImpl;
import com.example.demo.service.UserServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
@Validated
public class CartController {

	@Autowired
	private CartServiceImpl cartService;
	
	@GetMapping("/getCart/{userId}")
	public ResponseEntity<?>  getCartProducts(@PathVariable  Integer userId){
		
		List<ProductDetails> list1=  cartService.getCartProducts(userId);
		//return new ResponseEntity<ProductDetails>(list1,HttpStatus.OK);
		return new ResponseEntity<>(list1,HttpStatus.OK);
		
	}
	
}
