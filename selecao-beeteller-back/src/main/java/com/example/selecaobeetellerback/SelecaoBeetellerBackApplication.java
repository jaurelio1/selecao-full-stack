package com.example.selecaobeetellerback;

import com.example.selecaobeetellerback.service.MoedasCotacoesService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
@Configuration
@RequiredArgsConstructor
public class SelecaoBeetellerBackApplication {

	@Bean
	public WebClient webClient(WebClient.Builder builder){
		return builder
				.baseUrl("https://economia.awesomeapi.com.br")
				.defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
				.build();
	}

	public static void main(String[] args) {

		SpringApplication.run(SelecaoBeetellerBackApplication.class, args);

	}

}
