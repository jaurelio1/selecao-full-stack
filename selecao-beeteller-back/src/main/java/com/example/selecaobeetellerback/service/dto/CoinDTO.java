package com.example.selecaobeetellerback.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class CoinDTO implements Serializable {
    @JsonProperty("code")
    private String code;

    @JsonProperty("codein")
    private String codein;

    @JsonProperty("name")
    private String name;

    @JsonProperty("high")
    private String high;

    @JsonProperty("low")
    private String low;

    @JsonProperty("varBid")
    private String varBid;

    @JsonProperty("pctChange")
    private String pctChange;

    @JsonProperty("bid")
    private String bid;

    @JsonProperty("ask")
    private String ask;

    @JsonProperty("timestamp")
    private String timestamp;

    @JsonProperty("create_date")
    private String create_date;

}
