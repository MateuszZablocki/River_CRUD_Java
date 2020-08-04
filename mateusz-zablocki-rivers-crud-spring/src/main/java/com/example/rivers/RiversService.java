package com.example.rivers;

import com.example.rivers.Rivers;
import com.example.rivers.RiversRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RiversService {

    @Autowired
    RiversRepository riversRepository;

    public List<Rivers> getAllRivers(){
        List<Rivers> rivers = new ArrayList<Rivers>();
        riversRepository.findAll().forEach(rivers1->rivers.add(rivers1));
        return rivers;
    }

    public Rivers getRiversById(int id){
        return riversRepository.findById(id).get();
    }

    public void saveOrUpdate(Rivers rivers){
        riversRepository.save(rivers);
    }

    public void delete(int id){
        riversRepository.deleteById(id);
    }

    public void update(Rivers rivers, int id){
        riversRepository.save(rivers);
    }
}