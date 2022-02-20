package com.example.selecaobeetellerback.service;

import com.example.selecaobeetellerback.domain.Coin;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
@RequiredArgsConstructor
public class MoedasCotacoesService {

//    private final WebClient webClient;

//    public Mono<CoinDTO> getUsdBrlLastTenDays(){
//
//        return this.webClient
//                .method(HttpMethod.GET)
//                .uri("/json/daily/USD-BRL/1");
//    }


    public RestTemplate template() {
        return new RestTemplate();
    }

    public static final String URL_USD_BRL = "https://economia.awesomeapi.com.br/last/USD-BRL";

    public Coin getUSDBRLTemplate() {

        Coin restTemplate = template().getForObject(URL_USD_BRL, Coin.class);
        return restTemplate;
    }

//    public WebClient.RequestBodySpec getUsdBrlLastTenDays(){
//
//        return this.webClient
//                .method(HttpMethod.GET)
//                .uri("/json/daily/USD-BRL/1");
//    }





}
