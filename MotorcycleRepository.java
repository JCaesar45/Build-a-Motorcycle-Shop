package com.motogallery.repository;

import com.motogallery.domain.Motorcycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MotorcycleRepository extends JpaRepository<Motorcycle, String> {
    List<Motorcycle> findByCategory(Motorcycle.Category category);
    List<Motorcycle> findByManufacturerIgnoreCase(String manufacturer);
    List<Motorcycle> findByPriceLessThanEqual(Double maxPrice);
}
