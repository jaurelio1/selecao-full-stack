package com.example.selecaobeetellerback.web.rest;


import com.example.selecaobeetellerback.service.MoedasCotacoesService;
import com.example.selecaobeetellerback.domain.Coin;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/moedas-cotacoes")
@RequiredArgsConstructor
@Slf4j
public class MoedasCotacoesResource {

    private final MoedasCotacoesService service;

    @GetMapping("/buscar-moedas-usd-brl")
    public ResponseEntity<Coin> getUsdBrl() throws Exception {
        return ResponseEntity.ok(service.getUSDBRLTemplate());
    }

    @GetMapping("/buscar-moedas-btc-usd")
    public ResponseEntity<Coin> getBtcUsd() throws Exception {
        return ResponseEntity.ok(service.getBTCUSDTemplate());
    }

    @GetMapping("/buscar-moedas-btc-eur")
    public ResponseEntity<Coin> getBtcEur() throws Exception {
        return ResponseEntity.ok(service.getBTCEURTemplate());
    }

}
