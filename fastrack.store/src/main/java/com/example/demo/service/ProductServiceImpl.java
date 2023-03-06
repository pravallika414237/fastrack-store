package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ProductDetails;
import com.example.demo.model.UserDetails;
import com.example.demo.repository.ProductrRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductrRepository repository;

	@Override
	public void addProduct(ProductDetails pd) {
		// TODO Auto-generated method stub
		repository.save(pd);
	}

	@Override
	public ProductDetails getProduct(Integer id) {
		Optional<ProductDetails> product = repository.findById(id);
		return product.get();
	}

	@Override
	public List<ProductDetails> getAllProducts() {
		
		List<ProductDetails> l1 = repository.findAll();
		return l1;
	}

	@Override
	public ProductDetails updateProduct(Integer id, ProductDetails pd) {
Optional <ProductDetails> optuser= repository.findById(id);
		
ProductDetails product = optuser.get();
		
		if(product != null) {
			product.setProductName(pd.getProductName());
			product.setDescription(pd.getDescription());
			product.setImage(pd.getImage());
			product.setPrice(pd.getPrice());
			product.setProductid(pd.getProductid());
		}
		repository.save(product);
		return product == null ? null : repository.findById(id).get();
	}
	

	@Override
	public void deleteProduct(Integer id) {
		
		repository.deleteById(id);
		
	}

}
