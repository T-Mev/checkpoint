package com.tmev.checkpoint.services;

import com.api.igdb.request.TwitchAuthenticator;
import com.api.igdb.utils.TwitchToken;
import org.springframework.stereotype.Service;

@Service
public class ApiServiceImpl implements ApiService {

    // Set up environment variables
    private static final String CLIENT_ID = System.getenv("CLIENT_ID");
    private static final String CLIENT_SECRET = System.getenv("CLIENT_SECRET");

    // Create a new TwitchToken object
    private TwitchAuthenticator tAuth = TwitchAuthenticator.INSTANCE;
    private TwitchToken requestToken = tAuth.requestTwitchToken(CLIENT_ID, CLIENT_SECRET);

    // The instance stores the token in the object until a new one is requested
    private TwitchToken getToken = tAuth.getTwitchToken();

    @Override
    public String getClientId() {
        return CLIENT_ID;
    }

    @Override
    public String getClientSecret() {
        return CLIENT_SECRET;
    }

    @Override
    public TwitchToken getRequestToken() {
        return requestToken;
    }

    @Override
    public String getAccessToken() {
        return getToken.getAccess_token();
    }

}