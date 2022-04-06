package football.bluechips.config.security;

import football.bluechips.config.security.models.BluechipAuthorizedUser;
import football.bluechips.services.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    private final UserService userService;

    public LoginSuccessHandler(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {

        BluechipAuthorizedUser oauthUser = (BluechipAuthorizedUser) authentication.getPrincipal();
        userService.processOAuthPostLogin(oauthUser.getFullName());
        response.sendRedirect("/");
    }

}