package stmall.domain;

import java.util.*;
import lombok.*;
import stmall.domain.*;
import stmall.infra.AbstractEvent;

@Data
@ToString
public class OrderPlaced extends AbstractEvent {

    private Long id;
    private String userid;
    private String productname;
    private Integer qty;
    private String productid;
    private String status;
}
