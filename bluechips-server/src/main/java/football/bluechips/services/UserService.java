package football.bluechips.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    /*
        Do the logic to check to see if User exists and insert into database if not
     */
    public void processOAuthPostLogin(String username) {
        logger.info("{} is attempting to login", username);
    }

}