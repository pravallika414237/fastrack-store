package com.example.demo.service;

import java.util.List;

import com.example.demo.model.ProductDetails;
import com.example.demo.model.UserDetails;

public interface ProductService {
	
	public  void addProduct(ProductDetails pd);

	public ProductDetails getProduct(Integer userid);

	public List<ProductDetails> getAllProducts();

	public ProductDetails updateProduct(Integer id,ProductDetails pd);

	public void deleteProduct(Integer id);
}
