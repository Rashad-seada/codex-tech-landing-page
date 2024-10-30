package com.example.landing_page.controller

import com.example.landing_page.core.RequestValidator.validateRequest
import com.example.landing_page.core.dto.CustomResponse
import com.example.landing_page.dto.ContactRequest
import com.example.landing_page.models.Contact
import com.example.landing_page.services.ContactService
import jakarta.validation.Valid
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/contact")
class ContactController (
    val service : ContactService
) {


    @PostMapping("/")
    fun createContact(
        @Valid @RequestBody contactRequest: ContactRequest,
        bindingResult: BindingResult

    ) : CustomResponse<Contact> {

        val error = validateRequest<Contact>(bindingResult)
        if(error != null) return error

        return CustomResponse(
            isSuccessful = true,
            message = "We will contact you within 24 business hours",
            data = service.saveContact(contactRequest)
        )
    }

    @GetMapping("/")
    fun getAllContacts() : CustomResponse<List<Contact>> {

        return CustomResponse(
            isSuccessful = true,
            message = "Contacts Retrieved Successfully",
            data = service.getAllContact()
        )
    }



}