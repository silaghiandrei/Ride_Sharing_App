package main.ride_sharing_app.repository;

import main.ride_sharing_app.model.Driver;
import main.ride_sharing_app.model.DriverStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {
    Optional<Driver> findByEmail(String email);

    List<Driver> findByStatus(DriverStatus status);
}
