package com.example.selecaobeetellerback.service;

import com.example.selecaobeetellerback.domain.Coin;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
@RequiredArgsConstructor
public class MoedasCotacoesService {

    public RestTemplate template() {
        return new RestTemplate();
    }

    public static final String URL_USD_BRL = "https://economia.awesomeapi.com.br/last/USD-BRL";
    public static final String URL_BTC_EUR = "https://economia.awesomeapi.com.br/last/BTC-EUR";
    public static final String URL_BTC_USD = "https://economia.awesomeapi.com.br/last/BTC-USD";

    public Coin getUSDBRLTemplate() {
        return template().getForObject(URL_USD_BRL, Coin.class);
    }

    public Coin getBTCEURTemplate() {
        return template().getForObject(URL_BTC_EUR, Coin.class);
    }

    public Coin getBTCUSDTemplate() {
        return template().getForObject(URL_BTC_USD, Coin.class);
    }

}
