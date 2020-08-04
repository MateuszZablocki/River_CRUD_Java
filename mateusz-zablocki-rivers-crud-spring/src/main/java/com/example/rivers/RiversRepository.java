package com.example.rivers;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RiversRepository extends CrudRepository<Rivers, Integer> {
}
