package com.example.landing_page.dto


import jakarta.validation.constraints.Digits
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Pattern

data class ContactRequest(

    @field:Digits(integer = 10, fraction = 0, message = "id is required")
    val id : Long? = null,

    @field:NotNull(message = "email is required")
    @field:NotBlank(message = "email is required")
    val email : String? = null,

    @field:NotNull(message = "name is required")
    @field:NotBlank(message = "name is required")
    val name : String? = null,

    @field:Pattern(regexp = ".*\\S.*", message = "subject cannot be blank")
    val subject : String? = null,

    @field:Pattern(regexp = ".*\\S.*", message = "content cannot be blank")
    val content : String? = null
)
