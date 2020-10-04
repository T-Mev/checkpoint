package com.tmev.checkpoint.models.dto;

public class SimpleGameDTO {

    private String gameData;
    private String platformName;

    public SimpleGameDTO(String gameData, String platformName) {
        this.gameData = gameData;
        this.platformName = platformName;
    }

    public String getGameData() {
        return gameData;
    }

    public String getPlatformName() {
        return platformName;
    }

    public void setGameData(String gameData) {
        this.gameData = gameData;
    }

    public void setPlatformName(String platformName) {
        this.platformName = platformName;
    }

}

