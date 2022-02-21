package com.example.selecaobeetellerback.domain;

import com.example.selecaobeetellerback.service.dto.BTCEUR;
import com.example.selecaobeetellerback.service.dto.BTCUSD;
import com.example.selecaobeetellerback.service.dto.USDBRL;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Coin {

    @JsonProperty("USDBRL")
    private USDBRL usdbrl;

    @JsonProperty("BTCUSD")
    private BTCUSD btcusd;

    @JsonProperty("BTCEUR")
    private BTCEUR btceur;

}
