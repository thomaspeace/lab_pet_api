package com.codetests.bnta.petAPI.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SpringGlobalConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/pets")
                .allowedOrigins("http://localhost:5173")
                .allowedHeaders("*")
                .allowedMethods("GET", "POST");
        registry.addMapping("/pets/{id}")
                .allowedOrigins("http://localhost:5173")
                .allowedHeaders("*")
                .allowedMethods("DELETE");
    }

}
