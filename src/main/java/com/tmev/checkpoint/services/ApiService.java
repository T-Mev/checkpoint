package com.tmev.checkpoint.services;

import com.api.igdb.utils.TwitchToken;

public interface ApiService {

    public abstract String getClientId();
    public abstract String getClientSecret();
    public abstract TwitchToken getRequestToken();
    public abstract String getAccessToken();

}
