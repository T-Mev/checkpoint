package com.tmev.checkpoint.models.data;

import com.tmev.checkpoint.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
//    User getById(Long id);
}
