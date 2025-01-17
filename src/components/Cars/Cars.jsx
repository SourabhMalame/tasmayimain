import React, { useState } from "react";
import carsData from "../../assets/Data.json";
import styles from "./Cars.module.css";

const Cars = () => {
    // State for selected filters
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedRating, setSelectedRating] = useState("");

    // Handle brand filter change
    const handleBrandChange = (e) => setSelectedBrand(e.target.value);

    // Handle price filter change
    const handlePriceChange = (e) => setSelectedPrice(e.target.value);

    // Handle rating filter change

    // Function to filter cars based on selected filters
    const filteredCars = carsData.filter((car) => {
        let isBrandMatch = selectedBrand ? car.brand === selectedBrand : true;
        let isPriceMatch = selectedPrice ? car.price_range === selectedPrice : true;
        let isRatingMatch = selectedRating ? car.stars >= selectedRating : true;

        return isBrandMatch && isPriceMatch && isRatingMatch;
    });

    // Get unique brands for the filter options
    const uniqueBrands = [...new Set(carsData.map(car => car.brand))];

    // Get unique price ranges for the filter options
    const uniquePriceRanges = [...new Set(carsData.map(car => car.price_range))];

    return (
        <div className={styles.carsContainer}>
            <h2 className={styles.title}>Top 20 From Us</h2>

            {/* Filters Section */}
            {/* <div className={styles.filters}>
                <select onChange={handleBrandChange} value={selectedBrand} className={styles.filterSelect}>
                    <option value="">Select Brand</option>
                    {uniqueBrands.map((brand, index) => (
                        <option key={index} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>

                <select onChange={handlePriceChange} value={selectedPrice} className={styles.filterSelect}>
                    <option value="">Select Price Range</option>
                    {uniquePriceRanges.map((priceRange, index) => (
                        <option key={index} value={priceRange}>
                            {priceRange}
                        </option>
                    ))}
                </select>

            </div> */}

            {/* Car Grid */}
            <div className={styles.carGrid}>
                {filteredCars.map((car) => (
                    <div className={styles.carCard} key={car.id}>
                        <img src={car.image} alt={car.name} className={styles.carImage} />
                        <h3 className={styles.carName}>{car.name}</h3>
                        <p className={styles.carBrand}>Brand: {car.brand}</p>
                        <p className={styles.carType}>Type: {car.type}</p>
                        <p className={styles.carFuel}>Fuel Type: {car.fuel_type}</p>
                        <p className={styles.carRating}>Rating: {car.stars} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cars;
