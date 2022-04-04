package football.bluechips.config.oauth2;

import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

public class BluechipOAuthUser implements OAuth2User {

    private OAuth2User oauth2User;

    public BluechipOAuthUser(OAuth2User oauth2User) {
        this.oauth2User = oauth2User;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return oauth2User.getAttributes();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return oauth2User.getAuthorities();
    }

    @Override
    @Deprecated
    public String getName() {
        return oauth2User.getAttribute("name");
    }

    public String getFullName() {
        return oauth2User.getAttribute("name");
    }

    public String getEmail() {
        return oauth2User.<String>getAttribute("email");
    }

}