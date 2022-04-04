package football.bluechips.config.oauth2;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class OAuthUserService extends DefaultOAuth2UserService {

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {
        OAuth2User user = super.loadUser(userRequest);
        BluechipOAuthUser bluechipOAuthUser = new BluechipOAuthUser(user);
        System.out.println(bluechipOAuthUser.getEmail());
        System.out.println(bluechipOAuthUser.getFullName());
        return bluechipOAuthUser;
    }

}