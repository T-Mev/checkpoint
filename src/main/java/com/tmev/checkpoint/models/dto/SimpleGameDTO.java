package com.tmev.checkpoint.models.dto;

public class SimpleGameDTO {

    private int id;
    private String url;

    public SimpleGameDTO(int id, String url) {
        this.id = id;
        this.url = "https://images.igdb.com/igdb/image/upload/t_cover_big/" + url + ".jpg";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}

