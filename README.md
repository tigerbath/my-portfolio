# My First React Portfolio

![license](https://img.shields.io/github/license/tigerbath/my-portfolio)

This is the first version of my portfolio built using React. This is a mobile-first, clean and contemporary design, for easy and enjoyable reading

You can access via [this link](https://tigerbath.github.io/my-portfolio/)

## Table of Contents

- [Technology](#technology)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

# Technology

This uses Primarily React, Node, and MUI.

I used a couple of additionally npm packages such as

- npm react-responsive-carousel
- npm react-image-fade-in

# Features

## About Me / Homepage

![Homepage](src/images/Matthew-Palmer-Fullstack-Developer-Home.png)

## Contact

This contact section has validations for empty inputs and email errors, along with a mobile number input.
![Contact](src/images/Matthew-Palmer-Fullstack-Developer-contacty.png)

## Work

![Work](src/images/Matthew-Palmer-Fullstack-Developer-projects.png)

## Portfolio

The portfolio link sends you to an online viewport of my CV.
![Portfolio](src/images/portfolio.png)

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```
