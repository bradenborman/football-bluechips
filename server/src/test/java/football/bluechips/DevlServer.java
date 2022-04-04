package football.bluechips;

import org.springframework.boot.builder.SpringApplicationBuilder;

public class DevlServer extends FootballBluechips {

    public static void main(String[] args) {
        new DevlServer().configure(new SpringApplicationBuilder())
                .initializers()
                .profiles("local", "protected")
                .run(args);
    }

}