package com.motogallery.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "motorcycles")
public class Motorcycle {

    @Id
    @Column(nullable = false, updatable = false)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String manufacturer;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Category category;

    @Column(nullable = false)
    private Double price;

    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private Integer year;

    @Column(nullable = false)
    private Integer horsepower;

    public enum Category {
        SPORT, CRUISER, TOURING, DIRT, ADVENTURE, NAKED, ELECTRIC
    }

    public Motorcycle() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getManufacturer() { return manufacturer; }
    public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }
    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Integer getYear() { return year; }
    public void setYear(Integer year) { this.year = year; }
    public Integer getHorsepower() { return horsepower; }
    public void setHorsepower(Integer horsepower) { this.horsepower = horsepower; }
}
