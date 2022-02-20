package com.example.selecaobeetellerback.domain;

import com.example.selecaobeetellerback.service.dto.USDBRL;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Coin {

    @JsonProperty("USDBRL")
    private USDBRL usdbrl;

}
