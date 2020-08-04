package com.example.rivers;


import javax.persistence.*;

@Entity
@Table

public class Rivers {
    @Id
    @Column
    @GeneratedValue
    private int id;
    @Column
    private String river_name;
    @Column
    private int river_length;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRiver_name() {
        return river_name;
    }

    public void setRiver_name(String river_name) {
        this.river_name = river_name;
    }

    public int getRiver_length() {
        return river_length;
    }

    public void setRiver_length(int river_length) {
        this.river_length = river_length;
    }
}