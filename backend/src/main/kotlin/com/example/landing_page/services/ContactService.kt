package com.example.landing_page.services

import com.example.landing_page.dto.ContactRequest
import com.example.landing_page.models.Contact
import com.example.landing_page.repo.ContactRepo
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service


@Service
class ContactService(
    val repo : ContactRepo,
) {

    @Transactional
    fun saveContact(
        contactRequest: ContactRequest
    ) : Contact {
        return repo.save(Contact(
            id = contactRequest.id,
            name = contactRequest.name,
            email = contactRequest.email,
            subject = contactRequest.subject,
            content = contactRequest.content
        ))
    }

    @Transactional
    fun getAllContact() : List<Contact> {
        return repo.findAll()
    }


}