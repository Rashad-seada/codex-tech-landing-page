package com.example.landing_page.models

import jakarta.persistence.*

@Entity
@Table(name = "contacts")
data class Contact(

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    val id : Long? = null,

    @Column(nullable = false)
    val email : String? = null,

    @Column(nullable = false)
    val name : String? = null,

    @Column(nullable = true)
    val subject : String? = null,

    @Column(nullable = true)
    val content : String? = null
)