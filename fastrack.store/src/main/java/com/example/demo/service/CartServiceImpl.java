package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Service;

import com.example.demo.model.CartUser;
import com.example.demo.model.ProductDetails;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductrRepository;
import com.example.demo.repository.UserDetailsRepository;

@Service
public class CartServiceImpl implements CartService{

	@Autowired
	private ProductrRepository productRepository;
	
	@Autowired
	private UserDetailsRepository userRepository; 
	
	@Autowired
	private CartRepository cartRepository; 
	
	@Override
	public List<ProductDetails> getCartProducts(Integer userId) {
		
	List<CartUser> userProduct  = cartRepository.findByUserId(userId);
		
		List<ProductDetails> productList = new ArrayList<ProductDetails>();

		
		for (CartUser entries : userProduct) {
			
			productList.add(productRepository.findById(entries.getProductId()).get());
			
		}
		
		return productList;
	}
	
}
