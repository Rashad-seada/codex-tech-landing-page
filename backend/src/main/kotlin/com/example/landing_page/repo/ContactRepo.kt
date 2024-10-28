package com.example.landing_page.repo

import com.example.landing_page.models.Contact
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ContactRepo : JpaRepository<Contact,Long> {
}