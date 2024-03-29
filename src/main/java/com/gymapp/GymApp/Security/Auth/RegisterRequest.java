package com.gymapp.GymApp.Security.Auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class RegisterRequest {

    String username;
    String password;
    String firstname;
    String lastname;
    String country;
}
