package com.example.demo.service;

import java.util.List;

import com.example.demo.model.ProductDetails;

public interface CartService {

	
//	public List<ProductDetails> getAllProducts(Integer id);

	List<ProductDetails> getCartProducts(Integer userId);
}
