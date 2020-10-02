package com.tmev.checkpoint.models.dto;

public class UserCollectionDTO {

    private String username;
    private String apiData;

    public UserCollectionDTO(String username, String apiData) {
        this.username = username;
        this.apiData = apiData;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getApiData() {
        return apiData;
    }

    public void setApiData(String apiData) {
        this.apiData = apiData;
    }
}
