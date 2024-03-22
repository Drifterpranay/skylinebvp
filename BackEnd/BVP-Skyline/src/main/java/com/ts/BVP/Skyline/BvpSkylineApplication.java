package com.ts.BVP.Skyline;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(scanBasePackages="com")
@EnableJpaRepositories(basePackages="com.Dao")
@EntityScan(basePackages="com.Model")
public class BvpSkylineApplication {

	public static void main(String[] args) {
		SpringApplication.run(BvpSkylineApplication.class, args);
	}

}
