package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/text") // adaugă prefixul "/api/text"
public class HelloController {

    @PostMapping("/reverse") // folosește @PostMapping pentru a asculta cererile POST
    public String reverseText(@RequestBody String input) { // corectează RequestBody
        return new StringBuilder(input).reverse().toString();
    }
}
