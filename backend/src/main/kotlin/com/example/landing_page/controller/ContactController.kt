package com.example.landing_page.controller

import com.example.landing_page.core.dto.CustomResponse
import com.example.landing_page.dto.ContactRequest
import com.example.landing_page.models.Contact
import com.example.landing_page.services.ContactService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/contact")
class ContactController (
    val service : ContactService
) {


    @PostMapping("/")
    fun createContact(contactRequest: ContactRequest) : CustomResponse<Contact> {

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