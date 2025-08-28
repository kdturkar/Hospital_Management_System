package com.hms.user.api;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;              
import org.springframework.web.bind.annotation.RestController;

import com.hms.user.dto.UserDTO;

@RestController
@RequestMapping("/api/users")
@Validated
@CrossOrigin
public class UserAPI {
    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userService.createUser(userDTO);
    }
}
