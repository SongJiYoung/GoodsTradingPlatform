package com.ourgoods;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	@GetMapping("/hello")
	public List<String> hello() {
		return Arrays.asList("μμΈλν", "Hello");
	}
}
