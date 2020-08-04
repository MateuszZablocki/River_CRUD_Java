package com.example.rivers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class RiversController {

    @Autowired
    RiversService riversService;


    @GetMapping("/river")
    private List<Rivers> getAllRivers()
    {
        return riversService.getAllRivers();
    }

    @GetMapping("/river/{id}")
    private Rivers getRivers(@PathVariable("id")int id){
        return riversService.getRiversById(id);
    }

    @DeleteMapping("/river/{id}")
    private void deleteRiver(@PathVariable("id")int id){
        riversService.delete(id);
    }

    @PostMapping("/rivers")
    private int saveRiver(@RequestBody Rivers rivers){
        riversService.saveOrUpdate(rivers);
        return rivers.getId();
    }

    @PutMapping(path="/rivers")
    private Rivers update(@RequestBody Rivers rivers){
        riversService.saveOrUpdate(rivers);
        return rivers;
    }
}